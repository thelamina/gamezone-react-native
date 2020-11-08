import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AboutStack from './aboutStack';
import HomeStack from './homeStack';

const Root = createDrawerNavigator();

const Drawer = () => {
  return (
    <NavigationContainer>
      <Root.Navigator initialRouteName='Home'>
        <Root.Screen name='Home' component={HomeStack} />
        <Root.Screen name='About' component={AboutStack} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Drawer;
