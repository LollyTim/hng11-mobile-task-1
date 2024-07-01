import { NavigationContainer } from '@react-navigation/native';
import Products from './screens/Products';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ProductDetailScreen from 'screens/ProductDetails';
import CheckoutScreen from 'screens/Checkout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderSuccessScreen from 'screens/OrderSuccess';

//Tab bottom
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductsList" component={Products} options={{ title: 'Products' }} />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: 'Product Details' }}
      />
    </Stack.Navigator>
  );
}

function CheckoutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{ title: 'Checkout' }}
      />
      <Stack.Screen
        name="OrderSuccess"
        component={OrderSuccessScreen}
        options={{ title: 'Order Successful', headerLeft: null }}
      />
    </Stack.Navigator>
  );
}

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Products') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Checkout') {
            iconName = focused ? 'cart' : 'cart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Products" component={ProductsStack} options={{ headerShown: false }} />
      <Tab.Screen name="Checkout" component={CheckoutStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
