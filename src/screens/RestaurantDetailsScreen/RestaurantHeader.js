import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from 'react-native-vector-icons'
import restaurants from '../../../assets/data/restaurants.json'; 
import styles from './styles'

const RestaurantHeader = ({restaurant}) => {
    return(
        <View style={styles.screen}>
            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name='arrow-back-circle' size={40} color={'white'} />
            </TouchableOpacity>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)', 'transparent']} style={styles.gradient} />
            <ImageBackground 
                source={{uri: restaurant.image}} 
                style={styles.restImage}
            />
            <View style={styles.restaurant} >
                <View style={styles.info}>
                    <Text style={styles.restName}>{restaurant.name}</Text>
                    <Text>
                        {`$${restaurant.deliveryFee}  ·  ${restaurant.minDeliveryTime} - ${restaurant.maxDeliveryTime} min  ·  ${restaurant.rating}⭐`}
                    </Text>
                </View>
                <View style={styles.hrFull} />
                <Text style={styles.menu}>Menu</Text>
            </View>
        </View>
    );
}

export default RestaurantHeader;