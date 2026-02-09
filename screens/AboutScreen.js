import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/about';

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>

      {/* ФОН */}
      <Image
        source={require('../assets/crossBackground.jpg')}
        style={styles.background}
      />

      {/* ШАПКА */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuButton}>☰</Text>
        </Pressable>

        <Text style={styles.title}>О программе</Text>

        <View style={{ width: 32 }} />
      </View>

      {/* КОНТЕНТ */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('../assets/pigs.gif')}
          style={styles.gif}
        />

        {/* ЗАГОЛОВОК */}
        <Text style={styles.title}>floral.helper</Text>

        {/* ОСНОВНОЙ ТЕКСТ */}
        
        <Text style={styles.text}>
          Эта программа - переделка старого приложения с Xamarin на React Native для возможности использования на айфоне. 
        </Text>
                <Text style={styles.text}>
          Она  написана Аней (мной) и предназначена для Ани (меня).
          Аня, желаю тебе хорошего дня!
        </Text>

        {/* ПОДЗАГОЛОВОК */}
        <Text style={styles.subtitle}>Что тут есть?</Text>

        {/* БЛОК ПРО РАСХОДЫ */}
        <Text style={styles.underline}>Калькулятор расходов</Text>
        <Text style={styles.text}>
          Здесь можно задать лимит денег на месяц, вводить свои траты каждый день,
          и программа рассчитает, укладываюсь ли я в лимит на сегодняшний день.
        </Text>

        {/* БЛОК ПРО СПИСКИ */}
        <Text style={styles.underline}>Остальное</Text>
        <Text style={styles.text}>
          Остальные вкладки — это списки дел с чекбоксами по разным тематикам.
        </Text>
      </ScrollView>

    </SafeAreaView>
  );
}
