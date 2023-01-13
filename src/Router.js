import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Jobs from './Pages/Jobs/Jobs';
import JobsDetail from './Pages/JobsDetail/JobsDetail';
import FavoritedJobs from './Pages/FavoritedJobs/FavoritedJobs';
import JobProvider from './context/Provider';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JobsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name=" Jobs" component={Jobs} />
      <Stack.Screen name="Detail" component={JobsDetail} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <JobProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: 15,
              },

              tabBarIcon: ({color, size}) => (
                <Icon name="bag-checked" color={color} size={30} />
              ),
            }}
            name="Jobs"
            component={JobsStack}
          />
          <Tab.Screen
            options={{
              // headerShown: false,
              tabBarLabelStyle: {
                fontWeight: 'bold',
                fontSize: 15,
              },
              tabBarIcon: ({color, size}) => (
                <Icon name="heart" color={color} size={30} />
              ),
            }}
            name="Favorites"
            component={FavoritedJobs}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </JobProvider>
  );
};

FavoritedJobs.navigationOptions = {
  headerShown: false,
  // tabBarIconStyle: {display: 'none'},
  tabBarLabelStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    // padding: 10,
  },
};
Jobs.navigationOptions = {
  headerShown: false,
  // tabBarIconStyle: {display: 'none'},
  tabBarLabelStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    // padding: 10,
  },
};

export default Router;
