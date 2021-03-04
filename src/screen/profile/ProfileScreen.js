import React, {Fragment, useEffect} from 'react';
import {View, Platform} from 'react-native';
import {primary_color} from '../styles';
import SplashScreen from 'react-native-splash-screen';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const handleLogoutBtn = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: AUTH_LOGOUT});
    useEffect(() => {
      SplashScreen.hide();
    }, []);
  };
  return (
    <View>
      <Button title="Logout" onPress={handleLogoutBtn} color={primary_color} />
    </View>
  );
};

export default ProfileScreen;
