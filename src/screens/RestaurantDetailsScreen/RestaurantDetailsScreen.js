import { View, FlatList } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'; 
import MenuItem from '../../components/RestaurantMenuItem/MenuItem';
import RestaurantHeader from './RestaurantHeader'
import styles from './styles'

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
    return(
        <View style={styles.screen}>
            <FlatList 
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
                data={restaurant.dishes}
                renderItem={({ item }) => <MenuItem dish={item}/>}
                ItemSeparatorComponent={() => <View style={styles.hr} />}
            />
        </View>
    );
}

export default RestaurantDetailsScreen;