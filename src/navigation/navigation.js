import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from 'react-native-vector-icons';
import BasketScreen from '../screens/Basket/Basket';
import DishDetailsScreen from '../screens/DishDetailsScreen/DishDetails';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import OrderDetails from '../screens/OrderDetailsScreen/OrderDetails';
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen/RestaurantDetailsScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return(
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeTabs' component={HomeTabs} />
        </Stack.Navigator>
    )
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen 
                name='Home' 
                component={HomeStackNavigator} 
                options={{
                    tabBarIcon:({ color }) => (
                        <Ionicons name='home-sharp' size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name='Orders' 
                component={OrderStackNavigator} 
                options={{
                    tabBarIcon:({ color }) => (
                        <Ionicons name='receipt-sharp' size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name='Profile' 
                component={OrderScreen} 
                options={{
                    tabBarIcon:({ color }) => (
                        <Ionicons name='person-sharp' size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name='Restaurants' component={HomeScreen} />
            <HomeStack.Screen name='Restaurant' component={RestaurantDetailsScreen} />
            <HomeStack.Screen name='Dish' component={DishDetailsScreen} />
            <HomeStack.Screen name='Basket' component={BasketScreen} />
        </HomeStack.Navigator>
    )
}

const OrderStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
    return(
        <OrderStack.Navigator screenOptions={{ headerShown: false }}>
            <OrderStack.Screen name='Orders' component={OrderScreen} />
            <OrderStack.Screen name='Order' component={OrderDetails} />
        </OrderStack.Navigator>
    )
}

export default RootNavigator;