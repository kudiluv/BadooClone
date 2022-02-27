import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ChatsScreen from '../screens/chats/ChatsScreen';
import SearchScreen from '../screens/search/SearchScreen';
import LikesScreen from '../screens/likes/LikesScreen';
import Heart from '../static/Heart.svg';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen
        name="Likes"
        component={LikesScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Heart fill={'#CCCCCC'} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
