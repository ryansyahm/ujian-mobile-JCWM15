import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {background_color, primary_color} from '../screen/styles';
import FeedStack from './FeedStack';
import LiveScreen from '../screen/home/LiveScreen';

const Tab = createBottomTabNavigator();

const HomeNav = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: primary_color,
        inactiveTintColor: 'gray',
      }}
      initialRouteName="Feed"
      sceneContainerStyle={{backgroundColor: background_color}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = 'home';
          } else if (route.name === 'Live') {
            iconName = 'description';
          }
          return <Icon name={iconName} type="material" color={color} />;
        },
      })}>
      <Tab.Screen name="Feed" component={FeedStack} />
      <Tab.Screen name="Live" component={LiveScreen} />
    </Tab.Navigator>
  );
};

export default HomeNav;
