import { StyleSheet, FlatList, View } from 'react-native';
import RestaurantItem from '../../components/Restaurant Item/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={restaurants}
        renderItem={({ item }) => <RestaurantItem restaurant={item} /> }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 20
  },
});
