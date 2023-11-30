//@ts-nocheck
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen/CartScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen';
import SpecialOffersScreen from '../screens/SpecialOffersScreen/SpecialOffersScreen';
import MapViewScreen from '../screens/MapViewScreen/MapViewScreen';
import CardScreen from '../screens/CardScreen/CardScreen';
import AddPaymentScreen from '../screens/AddPaymentScreen/AddPaymentScreen'
import {LogBox} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';


const Stack = createNativeStackNavigator();

function AppNavigation() {
  LogBox.ignoreAllLogs();
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name = "CartScreen" component={CartScreen}/>
      <Stack.Screen name="SpecialOffersScreen" component={SpecialOffersScreen} />
      <Stack.Screen name = "ProductDetailsScreen" component={ProductDetailsScreen}/>
      <Stack.Screen name = "CategoryScreen" component={CategoryScreen}/>
      <Stack.Screen name = "MapViewScreen" component={MapViewScreen}/>
      <Stack.Screen name = "CardScreen" component={CardScreen}/>
      <Stack.Screen name = "AddPaymentScreen" component={AddPaymentScreen}/>
      <Stack.Screen name = "ProfileScreen" component={ProfileScreen}/>
      <Stack.Screen name={'OnboardingScreen'} component={OnboardingScreen}/>
      <Stack.Screen name={'LoginScreen'} component={LoginScreen}/>
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;