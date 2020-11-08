import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';

const Root = createStackNavigator();

const AboutStack = () => {
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
        name='About'
        component={About}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title='About Gamezone' />
            ),
          };
        }}
      />
    </Root.Navigator>
  );
};
export default AboutStack;
