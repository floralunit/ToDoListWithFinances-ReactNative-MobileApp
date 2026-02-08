import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
    padding: 20,
  },

  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.mainLighter,
  },

  menuText: {
    color: colors.primary,
    fontSize: 18,
  },

  item: {
    color: colors.primary,
    fontSize: 18,
    paddingVertical: 10,
  },
  menuText: {
  color: colors.primary,
  fontSize: 18,
  fontWeight: '600',
},

itemText: {
  color: colors.primary,
  fontSize: 18,
  fontWeight: '500',
},

checkbox: {
  fontSize: 22,
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
    right: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addButtonText: {
    fontSize: 32,
    color: '#000',
  },
  itemRow: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
},

completedRow: {
  opacity: 0.3,
},

checkbox: {
  fontSize: 22,
  marginRight: 12,
  color: '#f5cb5c',
},

itemText: {
  color: '#e8eddf',
  fontSize: 18,
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
