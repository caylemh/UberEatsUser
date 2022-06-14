import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import DishDetails from './src/screens/DishDetailsScreen/DishDetails';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen/RestaurantDetailsScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsScreen /> */}
      <DishDetails />

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
