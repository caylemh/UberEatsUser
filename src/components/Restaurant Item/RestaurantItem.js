import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const RestaurantItem = ({restaurant}) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('Restaurant', {id: restaurant.id});
    }

    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>
            
            <View style={styles.restaurantContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{
                    uri:restaurant.image,
                    }} 
                    style={styles.image}
                    />
                </View>
                <View style={styles.restaurantInfo}>
                    <View style={styles.desc}>
                        <Text style={styles.title}>{restaurant.name}</Text>
                        <Text style={styles.subTitle}>
                            {`$${restaurant.deliveryFee}  ·  ${restaurant.minDeliveryTime} - ${restaurant.maxDeliveryTime} min`}
                        </Text>
                    </View>
                    <View style={styles.rating}>
                        <Text style={styles.ratingText}>{restaurant.rating}</Text>
                    </View>
                </View>
            </View>

            <StatusBar style="auto" />
        </TouchableOpacity>
    );
}

export default RestaurantItem;