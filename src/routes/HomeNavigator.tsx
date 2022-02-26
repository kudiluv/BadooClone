import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile.screen/ProfileScreen';
import ChatsScreen from '../screens/chats.screen/ChatsScreen';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Likes" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
