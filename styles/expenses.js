import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    padding: 20,
  },

  month: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },

  limit: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },

  resultRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  resultLabel: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '700',
    flex: 1,
  },

  resultValue: {
    color: colors.secondary,
    fontSize: 28,
    fontWeight: '800',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: colors.mainLighter,
  },

  day: {
    color: colors.secondary,
    fontSize: 18,
    width: 30,
    textAlign: 'center',
  },

  input: {
    color: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: '#6c757d',
    width: 80,
    marginHorizontal: 6,
    textAlign: 'center',
  },

  extra: {
    flex: 1,
    opacity: 0.4,
  },
});
