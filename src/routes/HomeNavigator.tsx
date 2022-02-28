import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ChatsScreen from '../screens/chats/ChatsScreen';
import SearchScreen from '../screens/search/SearchScreen';
import LikesScreen from '../screens/likes/LikesScreen';
import {TouchableNativeFeedback, View} from 'react-native';
import ChatBottom from './components/ChatBottom';
import HeartBottom from './components/HeartBottom';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#2D2D2D',
        tabBarInactiveTintColor: '#CCCCCC',
        tabBarButton: props => (
          <TouchableNativeFeedback
            {...props}
            background={TouchableNativeFeedback.Ripple('#f3e7fd', false, 45)}>
            <View {...props}>{props.children}</View>
          </TouchableNativeFeedback>
        ),
      }}>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <ChatBottom fill={color} />,
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <HeartBottom fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
