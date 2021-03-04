import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FeedScreen from '../screen/home/FeedScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {View} from 'react-native';
import {background_color, text_color} from '../screen/styles';

const Stack = createStackNavigator();

const FeedStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="FeedList">
      <Stack.Screen
        name="FeedList"
        component={FeedScreen}
        options={{
          title: '',
          headerRight: () => (
            <View>
              <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon name="view-headline" type="material" color={text_color} />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: background_color,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;
