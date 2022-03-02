import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/profile/ProfileScreen';
import ChatsScreen from '../screens/chats/ChatsScreen';
import SearchScreen from '../screens/search/SearchScreen';
import LikesScreen from '../screens/likes/LikesScreen';
import {Platform, StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import ChatBottom from './components/icons/ChatBottom';
import HeartBottom from './components/icons/HeartBottom';
import SearchBottom from './components/icons/SearchBottom';
import ProfileBottom from './components/icons/ProfileBottom';
import SearchHeader from '../screens/search/SearchHeader';

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
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          header: () => <SearchHeader />,
          tabBarIcon: ({color}) => <SearchBottom fill={color} />,
          tabBarStyle: styles.hiddenBorderStyle,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => <ProfileBottom fill={color} />,
        }}
      />
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

const styles = StyleSheet.create({
  hiddenBorderStyle: {
    borderTopWidth: 0,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 0,
      },
    }),
  },
});
