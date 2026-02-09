import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main,
    },

    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0.25, // как в Xamarin
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 6,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#414950',
    },

    menuButton: {
        fontSize: 26,
        color: colors.secondary,
        width: 32,
    },

    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700',
        color: colors.primary,
        marginBottom: 10
    },

    content: {
        paddingHorizontal: 24,
        paddingTop: 20,
    },

    gif: {
        width: 140,
        height: 140,
        alignSelf: 'center',
        marginVertical: 20,
    },
    gifSmall: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginVertical: 20,
    },

    text: {
        color: colors.primary,
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 14,
        textAlign: 'justify'
    },

    subtitle: {
        color: colors.secondary,
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 6,
    },

    underline: {
        color: colors.primary,
        fontSize: 16,
        textDecorationLine: 'underline',
        marginBottom: 4,
    },
});
