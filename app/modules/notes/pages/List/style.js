import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  toolbar: {
    height: 72,
    paddingLeft: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#F5F5F5'
  },
  toolbarActionButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionStyle: {
    height: 24,
    marginRight: 16
  },
  title: {
    fontSize: 24,
    color: '#2F2829',
    fontWeight: 'bold'
  },
  seprator: {
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%'
  },
  footer: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE'
  }
});
