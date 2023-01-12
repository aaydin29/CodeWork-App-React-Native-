import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Jobs from './Pages/Jobs/Jobs';
import JobsDetail from './Pages/JobsDetail/JobsDetail';
import FavoritedJobs from './Pages/FavoritedJobs/FavoritedJobs';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JobsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Jobs Screen" component={Jobs} />
      <Stack.Screen name="Jobs Detail" component={JobsDetail} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{headerShown: false}}
          name="Jobs"
          component={JobsStack}
        />
        <Tab.Screen name="Favorited Jobs" component={FavoritedJobs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
