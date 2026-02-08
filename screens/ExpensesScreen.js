import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../db/database';
import { styles } from '../styles/expenses';
import { getMonthLimit, setMonthLimit } from '../services/limitStorage';

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState([]);
  const [monthLimit, setMonthLimitState] = useState(0);
  const [dayLimit, setDayLimit] = useState(0);
  const [calcResult, setCalcResult] = useState('0');

  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const day = now.getDate();

  function getDaysCount(m, y) {
    return new Date(y, m, 0).getDate();
  }

  async function initExpenses() {
    const database = await db;
    const daysCount = getDaysCount(month, year);

    const existing = await database.getAllAsync(
      'SELECT * FROM Expenses WHERE Month = ? AND Year = ?',
      [month, year]
    );

    if (existing.length === 0) {
      for (let d = 1; d <= daysCount; d++) {
        await database.runAsync(
          `INSERT INTO Expenses 
           (Day, Month, Year, SpentValue, ExtraExpense)
           VALUES (?, ?, ?, ?, ?)`,
          [d, month, year, 0, '']
        );
      }
    }
  }

  async function loadExpenses() {
    const database = await db;
    const data = await database.getAllAsync(
      'SELECT * FROM Expenses WHERE Month = ? AND Year = ? ORDER BY Day',
      [month, year]
    );
    setExpenses(data);
    calculate(data);
  }

  function calculate(data) {
    let spent = 0;
    data.forEach(e => spent += Number(e.SpentValue));

    const perfect = day * dayLimit;
    const diff = Math.round((perfect - spent) * 100) / 100;

    setCalcResult(diff > 0 ? `+ ${diff}` : `${diff}`);
  }

  async function onValueChange(item, value, field) {
    const database = await db;

    await database.runAsync(
      `UPDATE Expenses SET ${field} = ? WHERE Id = ?`,
      [value, item.Id]
    );

    loadExpenses();
  }

  async function editLimit() {
    Alert.prompt(
      'Лимит на месяц',
      'Введите новый лимит:',
      async value => {
        if (!value) return;
        await setMonthLimit(value);
        initLimit();
      },
      'plain-text',
      monthLimit.toString()
    );
  }

  async function initLimit() {
    const limit = await getMonthLimit();
    const days = getDaysCount(month, year);

    setMonthLimitState(limit);
    setDayLimit(limit / days);
  }

  useEffect(() => {
    (async () => {
      await initLimit();
      await initExpenses();
      await loadExpenses();
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.month}>
        {now.toLocaleString('ru', { month: 'long' })} {year}
      </Text>

      <Pressable onPress={editLimit}>
        <Text style={styles.limit}>
          Лимит на месяц: {Math.round(monthLimit)} ₽ ✎
        </Text>
      </Pressable>

      <Text style={styles.limit}>
        Лимит в день: {Math.round(dayLimit)} ₽
      </Text>

      <View style={styles.resultRow}>
        <Text style={styles.resultLabel}>
          Итог на {now.toLocaleDateString('ru')}:
        </Text>
        <Text style={styles.resultValue}>{calcResult}</Text>
      </View>

      <FlatList
        data={expenses}
        keyExtractor={item => item.Id.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.day}>{item.Day}</Text>

            <TextInput
              value={item.SpentValue.toString()}
              keyboardType="numeric"
              style={styles.input}
              onChangeText={v =>
                onValueChange(item, Number(v) || 0, 'SpentValue')
              }
            />

            <TextInput
              value={item.ExtraExpense}
              placeholder="..."
              placeholderTextColor="#777"
              style={[styles.input, styles.extra]}
              onChangeText={v =>
                onValueChange(item, v, 'ExtraExpense')
              }
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
