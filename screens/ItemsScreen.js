import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  Alert,
  TextInput,
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../db/database';
import { styles } from '../styles/common';

export default function ItemsScreen({ route, navigation }) {
  const { category } = route.params;

  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  async function loadItems() {
    const database = await db;
    const result = await database.getAllAsync(
      'SELECT * FROM Items WHERE Category = ?',
      [category]
    );
    setItems(result);
  }

  useEffect(() => {
    loadItems();
  }, []);

  async function saveItem() {
    if (!text.trim()) return;

    const database = await db;

    if (editingItem) {
      await database.runAsync(
        'UPDATE Items SET Content = ? WHERE Id = ?',
        [text, editingItem.Id]
      );
    } else {
      await database.runAsync(
        'INSERT INTO Items (Content, IsCompleted, Category) VALUES (?, ?, ?)',
        [text, 0, category]
      );
    }

    setText('');
    setEditingItem(null);
    setModalVisible(false);
    loadItems();
  }

  async function toggleItem(item) {
    const database = await db;
    await database.runAsync(
      'UPDATE Items SET IsCompleted = ? WHERE Id = ?',
      [item.IsCompleted ? 0 : 1, item.Id]
    );
    loadItems();
  }

  function deleteItem(item) {
    Alert.alert(
      'Удалить?',
      item.Content,
      [
        { text: 'Отмена' },
        {
          text: 'Удалить',
          style: 'destructive',
          onPress: async () => {
            const database = await db;
            await database.runAsync(
              'DELETE FROM Items WHERE Id = ?',
              [item.Id]
            );
            loadItems();
          },
        },
      ]
    );
  }

  function openEdit(item) {
    setEditingItem(item);
    setText(item.Content);
    setModalVisible(true);
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* ЗАКРЕПЛЁННАЯ ШАПКА КАК В XAMARIN */}
      <View style={styles.listHeader}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuButton}>☰</Text>
        </Pressable>

        <Text style={styles.listTitle} numberOfLines={1}>
          {category}
        </Text>

        {/* заглушка для центрирования */}
        <View style={{ width: 32 }} />
      </View>

      {/* СПИСОК */}
      <FlatList
        data={items}
        keyExtractor={item => item.Id.toString()}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => openEdit(item)}
            onLongPress={() => deleteItem(item)}
            style={[
              styles.itemRow,
              item.IsCompleted && styles.completedRow,
            ]}
          >
            <Pressable onPress={() => toggleItem(item)}>
              <Text style={styles.checkbox}>
                {item.IsCompleted ? '☑' : '☐'}
              </Text>
            </Pressable>

            <Text style={styles.itemText}>{item.Content}</Text>
          </Pressable>
        )}
      />

      {/* КНОПКА + */}
      <Pressable
        style={styles.addButton}
        onPress={() => {
          setEditingItem(null);
          setText('');
          setModalVisible(true);
        }}
      >
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>

      {/* МОДАЛКА ВВОДА */}
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalBackdrop}>
          <View style={styles.modal}>
            <TextInput
              value={text}
              onChangeText={setText}
              placeholder="..."
              placeholderTextColor="#aaa"
              style={styles.input}
              autoFocus
            />
            <Pressable style={styles.saveButton} onPress={saveItem}>
              <Text style={styles.saveButtonText}>Сохранить</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}
