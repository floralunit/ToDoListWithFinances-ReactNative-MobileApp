import {
    View,
    Text,
    Pressable,
    Image,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/home';

const MENU = [
    { id: 'expenses', title: 'Калькулятор расходов', icon: require('../assets/icons/expense.png'), screen: 'Expenses' },
    { id: 'buy', title: 'Покупки', icon: require('../assets/icons/shopping.png'), screen: 'Items' },
    { id: 'plans', title: 'Планы', icon: require('../assets/icons/plans.png'), screen: 'Items' },
    { id: 'globalplans', title: 'Глобальные планы', icon: require('../assets/icons/thinking.png'), screen: 'Items' },
    { id: 'diary', title: 'Дневник', icon: require('../assets/icons/diary.png'), screen: 'Items' },
    { id: 'photos', title: 'Идеи для фотографий', icon: require('../assets/icons/camera.png'), screen: 'Items' },
    { id: 'videos', title: 'Идеи для видео', icon: require('../assets/icons/movie.png'), screen: 'Items' },
    { id: 'frogs', title: 'Идеи для лягушек', icon: require('../assets/icons/frog.png'), screen: 'Items' },
    { id: 'posts', title: 'Идеи для постов', icon: require('../assets/icons/social_media.png'), screen: 'Items' },
    { id: 'sadlist', title: 'Тревожный список', icon: require('../assets/icons/tears.png'), screen: 'Items' },
    { id: 'about', title: 'О программе', icon: require('../assets/my symbol.png'), screen: 'About' },
];

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            {/* ШАПКА */}
            <View style={styles.header}>
                <Image source={require('../assets/header.jpg')} style={styles.headerBg} />

                <View style={styles.avatarWrapper}>
                    <View style={styles.avatarBorder}>
                        <Image source={require('../assets/user.jpg')} style={styles.avatar} />
                    </View>
                    <Text style={styles.username}>floralunit</Text>
                </View>
            </View>

            {/* МЕНЮ — СКРОЛЛ */}
            <ScrollView style={styles.menu} showsVerticalScrollIndicator={false}>
                {MENU.map(item => (
                    <Pressable
                        key={item.id}
                        style={styles.menuItem}
                        onPress={() =>
                            navigation.navigate(item.screen, { category: item.title })
                        }
                    >
                        <Image source={item.icon} style={styles.menuIcon} />
                        <Text style={styles.menuText}>{item.title}</Text>
                    </Pressable>
                ))}
            </ScrollView>

            {/* ФУТЕР */}
            <View style={styles.footer}>
                <Image
                    source={require('../assets/icons/footer.gif')}
                    style={styles.footerGif}
                />
                <Text style={styles.footerText}>floral.dev</Text>
                <Text style={styles.footerText}>
                    {new Date().toLocaleDateString('ru')}
                </Text>
            </View>

        </SafeAreaView>

    );
}
