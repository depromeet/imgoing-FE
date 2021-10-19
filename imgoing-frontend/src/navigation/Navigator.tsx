import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';

import { icon_arrowLeft } from 'assets/svg';
import { NavigatorParamList } from 'types/Route';
import { colors } from 'constant/index';
import PlanEditScreen from 'screens/PlanEditScreen';
import PlanAddScreen from 'screens/PlanAddScreen';
import LoginScreen from 'screens/LoginScreen';
import AuthLoadingScreen from 'screens/AuthLoadingScreen';
import MainBottomTab from 'navigation/MainBottomTab';

const Stack = createStackNavigator<NavigatorParamList>();

const Stacks = () => {
  return (
    <Stack.Navigator initialRouteName='AuthLoadingScreen'>
      <Stack.Screen
        name='AuthLoadingScreen'
        component={AuthLoadingScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen name='Main' component={MainBottomTab} options={{ headerShown: false }} />
      <Stack.Screen
        name='PlanEdit'
        component={PlanEditScreen}
        options={{
          title: '편집하기',
          headerShown: true,
          headerTitleAlign: 'left',
          headerLeft: () => <>{/*SVG 로드 설정 후 제작*/}</>,
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name='PlanAdd'
        component={PlanAddScreen}
        options={{
          title: '',
          headerShown: true,
          headerTitleAlign: 'left',
          headerBackImage: () => <SvgXml xml={icon_arrowLeft} fill={colors.black} />,
          headerBackTitle: 'back',
          headerStyle: {
            shadowColor: 'transparent',
          },
        }}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
};
