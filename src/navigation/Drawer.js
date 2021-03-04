import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNav from './HomeNav';
import ProfileStack from './ProfileStack';

const Drawer = createDrawerNavigator();

const Drawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={HomeNav} />
      <Drawer.Screen name="Account" component={ProfileStack} />
    </Drawer.Navigator>
  );
};

export default Drawer;
