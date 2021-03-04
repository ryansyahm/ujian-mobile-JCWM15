import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../screen/profile/ProfileScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
