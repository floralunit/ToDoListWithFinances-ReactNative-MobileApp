import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },

  header: {
    height: 175,
    position: 'relative',
  },

  headerBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  avatarWrapper: {
    alignItems: 'center',
    marginTop: 25,
  },

  avatarBorder: {
    width: 100,
    height: 100,
    borderRadius: 55,
    backgroundColor: '#343a40',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },

  username: {
    color: '#e8eddf',
    fontSize: 16,
    fontWeight: '700',
  },

  menu: {
    paddingHorizontal: 24,
    flexGrow: 1,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },

  menuIcon: {
    width: 26,
    height: 26,
    marginRight: 16,
    tintColor: colors.primary,

  },

  menuText: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '600',
  },

  footer: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#343a40',
    marginTop: 5,
    height: 70,
  },
  footerGif: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginBottom: 8,
  },

  footerText: {
    color: '#6c757d',
    textAlign: 'center',
    fontSize: 16,
  },

});
