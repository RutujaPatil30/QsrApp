import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CartScreen from '../screens/CartScreen/CartScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';
import SpecialOffersScreen from '../screens/SpecialOffersScreen/SpecialOffersScreen';
import MapViewScreen from '../screens/MapViewScreen/MapViewScreen';
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = (props: any) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={'OnboardingScreen'}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={'LoginScreen'}
        component={LoginScreen}
      />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name = "CartScreen" component={CartScreen}/>
      <Stack.Screen name="SpecialOffersScreen" component={SpecialOffersScreen} />
      <Stack.Screen name = "ProductDetailsScreen" component={ProductDetailsScreen}/>
      <Stack.Screen name = "CategoryScreen" component={CategoryScreen}/>
      <Stack.Screen name = "MapViewScreen" component={MapViewScreen}/>
      <Stack.Screen name = "PaymentScreen" component={PaymentScreen}/>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
