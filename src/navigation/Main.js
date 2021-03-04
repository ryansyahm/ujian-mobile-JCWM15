import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AuthStack from './AuthStack';
import {keepLoginAction} from '../redux/action';
import Drawer from './Drawer';

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(keepLoginAction());
  }, [dispatch]);
  const {isSignedIn} = useSelector((state) => state.auth);
  return <>{isSignedIn ? <Drawer /> : <AuthStack />}</>;
};

export default Main;
