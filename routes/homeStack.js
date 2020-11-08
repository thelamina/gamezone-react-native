import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Root = createStackNavigator();

const HomeStack = () => {
  return (
    <Root.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#eee',
        },
        headerTintColor: '#444',
      }}
    >
      <Root.Screen
        name='Home'
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title='Gamezone' />
            ),
          };
        }}
      />
      <Root.Screen
        name='ReviewDetails'
        component={ReviewDetails}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Root.Navigator>
  );
};
export default HomeStack;
