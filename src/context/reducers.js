import {Alert} from 'react-native';
export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVORITIES':
      const {jobs} = action.payload;
      if (state.favoritiesList.find(item => item.id === jobs.id)) {
        Alert.alert(
          'CodeWork',
          'Error !!! Please choose another job. This job is already in your favourites!',
        );
        return state;
      }

      const newFavJob = [jobs, ...state.favoritiesList];
      Alert.alert('CodeWork', 'The job has been added to favorites!');
      return {...state, favoritiesList: newFavJob};

    case 'REMOVE_FAVORITIES':
      return {
        favoritiesList: [
          ...state.favoritiesList.filter(job => job !== action.payload),
        ],
      };
    default:
      return state;
  }
}
