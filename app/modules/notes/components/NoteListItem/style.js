import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#D7D7D7'
  },
  detailContainer: {
    flex: 3,
    flexDirection: 'column'
  },
  statusContiner: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#2F2F2F'
  },
  description: {
    fontSize: 12,
    color: '#999999'
  },
  date: {
    fontSize: 12,
    color: '#CBCBCB'
  },
  startActionStyle: {
    height: 24,
    marginRight: 8,
    backgroundColor: '#FFFFFF'
  },
  favoriteActionStyle: {
    height: 24,
    marginLeft: 8,
    backgroundColor: '#FFFFFF'
  }
});
