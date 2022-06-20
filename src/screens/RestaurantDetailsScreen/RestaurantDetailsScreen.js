import { View, FlatList } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import restaurants from '../../../assets/data/restaurants.json'; 
import MenuItem from '../../components/RestaurantMenuItem/MenuItem';
import RestaurantHeader from './RestaurantHeader'
import styles from './styles'
import { useRoute } from '@react-navigation/native'

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {

    const route = useRoute();

    const id = route.params.id;

    return(
        <View style={styles.screen}>
            <FlatList 
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({ item }) => <MenuItem dish={item}/>}
                ItemSeparatorComponent={() => <View style={styles.hr} />}
            />
            <StatusBar style='light' />
        </View>
    );
}

export default RestaurantDetailsScreen;