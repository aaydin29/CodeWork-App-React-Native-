import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  company: {
    color: 'black',
    margin: 2,
  },
  locations_container: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e53935',
    backgroundColor: '#e53935',
    padding: 5,
    alignSelf: 'baseline',
  },
  locations: {
    color: 'white',
    fontWeight: 'bold',
  },
  levels: {
    alignSelf: 'flex-end',
    marginRight: 5,
    color: '#e53935',
    fontWeight: 'bold',
  },
});
