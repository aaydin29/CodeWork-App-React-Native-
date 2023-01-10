import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Jobs from './Pages/Jobs/Jobs';
import FavoritedJobs from './Pages/FavoritedJobs/FavoritedJobs';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Jobs" component={Jobs} />
        <Tab.Screen name="Favorited Jobs" component={FavoritedJobs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
