import React from 'react';
import { Platform, StyleSheet,
  Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';
import WatchScreen from '../screens/WatchScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
};

HomeStack.path = '';

const InfoStack = createStackNavigator(
  {
    Info: InfoScreen,
  },
  config
);

InfoStack.navigationOptions = {
  tabBarLabel: 'Movie Info',
};

InfoStack.path = '';

const WatchStack = createStackNavigator(
  {
    Watch: WatchScreen,
  },
  config
);

WatchStack.navigationOptions = {
  tabBarLabel: 'Where to Watch',
  
};

WatchStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  InfoStack ,
  WatchStack,
});

tabNavigator.path = '';

export default tabNavigator;
