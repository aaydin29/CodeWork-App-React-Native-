import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  jobs_info_container: {
    backgroundColor: '#eceff1',
    padding: 10,
  },
  html_container: {
    backgroundColor: 'white',
    borderWidth: 1,
    paddingLeft: 7,
    paddingRight: 7,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  location_container: {
    flexDirection: 'row',
    margin: 2,
  },
  level_container: {
    flexDirection: 'row',
    margin: 2,
  },
  location_text: {
    color: '#e53935',
    fontWeight: 'bold',
  },
  location_text2: {
    color: 'black',
  },
  job_text: {
    color: '#e53935',
    fontWeight: 'bold',
  },
  job_text2: {
    color: 'black',
  },
  bottom_header: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 3,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
});
