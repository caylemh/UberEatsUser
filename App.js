import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BasketItem from './src/components/BasketItem/BasketItem';
import Basket from './src/screens/Basket/Basket';
import DishDetails from './src/screens/DishDetailsScreen/DishDetails';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import OrderDetails from './src/screens/OrderDetailsScreen/OrderDetails';
import OrderScreen from './src/screens/OrderScreen/OrderScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      {/* <DishDetails /> */}
      {/* <Basket /> */}
      {/* <OrderScreen /> */}
      <OrderDetails />

      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 0,
    padding: 0
  },
});
