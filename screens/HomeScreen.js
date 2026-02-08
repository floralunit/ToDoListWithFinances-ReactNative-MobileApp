import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from '../styles/common';
import { SafeAreaView } from 'react-native-safe-area-context';

const MENU = [
  { id: 'expenses', title: 'Калькулятор расходов', screen: 'Expenses' },
  { id: 'buy', title: 'Покупки', screen: 'Items' },
  { id: 'plans', title: 'Планы', screen: 'Items' },
  { id: 'global', title: 'Глобальные планы', screen: 'Items' },
  { id: 'diary', title: 'Дневник', screen: 'Items' },
  { id: 'photo', title: 'Идеи для фотографий', screen: 'Items' },
  { id: 'video', title: 'Идеи для видео', screen: 'Items' },
  { id: 'frog', title: 'Идеи для лягушек', screen: 'Items' },
  { id: 'post', title: 'Идеи для постов', screen: 'Items' },
  { id: 'anxiety', title: 'Тревожный список', screen: 'Items' },
  { id: 'about', title: 'О программе', screen: 'About' },
];


export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        {MENU.map(item => (
        <Pressable
            key={item.id}
          style={styles.menuItem}
          onPress={() => {
            if (item.screen === 'Items') {
              navigation.navigate('Items', { category: item.title });
            } else {
              navigation.navigate(item.screen);
            }
          }}
        >
          <Text style={styles.menuText}>{item.title}</Text>
        </Pressable>
      ))}
    </SafeAreaView>
  );
}
