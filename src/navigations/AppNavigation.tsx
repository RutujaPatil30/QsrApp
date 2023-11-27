//@ts-nocheck
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../screens/CartScreen/CartScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen/ProductDetailsScreen';
import SpecialOffersScreen from '../screens/SpecialOffersScreen/SpecialOffersScreen';
import MapViewScreen from '../screens/MapViewScreen/MapViewScreen';
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen';
import AddPaymentScreen from '../screens/AddPaymentScreen/AddPaymentScreen'
import {LogBox} from 'react-native';


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
      <Stack.Screen name = "PaymentScreen" component={PaymentScreen}/>
      <Stack.Screen name = "AddPaymentScreen" component={AddPaymentScreen}/>
    </Stack.Navigator>
  );
}

export default AppNavigation;