import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    padding: 20,
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },

  headerSpace: {
    height: 60,
  },

  item: {
    color: colors.primary,
    fontSize: 25,
    paddingVertical: 10,
  },

  itemText: {
    color: colors.primary,
    fontSize: 25,
    fontWeight: '500',
  },

  checkbox: {
    fontSize: 35,
    marginLeft: -5,
    marginRight: 12,
    color: colors.secondary,
    fontWeight: '600',
  },


  completed: {
    opacity: 0.3,
    textDecorationLine: 'line-through',
  },

  addButton: {
    backgroundColor: colors.secondary,
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    right: 40,
    bottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    fontSize: 32,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#3d434a',
  },

  completedRow: {
    opacity: 0.3,
  },
  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#3d434a',
  },

  menuButton: {
    fontSize: 30,
    color: colors.secondary,
    width: 32,
  },

  listTitle: {
    flex: 1,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: '700',
    color: '#e8eddf',
  },


  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modal: {
    backgroundColor: '#343a40',
    padding: 20,
    width: '80%',
    borderRadius: 10,
  },

  input: {
    color: '#e8eddf',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#6c757d',
    marginBottom: 20,
  },

  saveButton: {
    backgroundColor: '#f5cb5c',
    padding: 12,
    borderRadius: 6,
  },

  saveButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  }
});
