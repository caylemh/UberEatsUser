import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import restaurants from '../../../assets/data/restaurants.json'; 

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
    return(
        <View style={styles.screen}>
            <LinearGradient colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.2)', 'transparent']} style={styles.gradient} />
            <Image 
                source={{uri: restaurant.image}} 
                style={styles.restImage}
            />
            <View style={styles.restaurant} >
                <Text style={styles.restName}>{restaurant.name}</Text>
                <Text style={styles.restInfo}>
                    {`$${restaurant.deliveryFee}  ·  ${restaurant.minDeliveryTime} - ${restaurant.maxDeliveryTime} min  ·  ${restaurant.rating}⭐`}
                </Text>
            </View>
            <View style={styles.hrFull} />
            <View style={styles.menuContainer}>
                    <Text style={styles.menu}>Menu</Text>
                    <Text style={styles.menuItemName}>{restaurant.dishes[0].name}</Text>
                    <Text style={styles.menuItemDesc}>·  {restaurant.dishes[0].description}</Text>
                    <Text style={styles.menuItemPrice}>${restaurant.dishes[0].price  }</Text>
                    <View style={styles.hr} />
            </View>
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
    gradient:{
        width:'100%',
        aspectRatio: 5/2,
        position: 'absolute',
        zIndex: 2
    },
    restImage:{
        width:'100%',
        aspectRatio: 6/3,
        zIndex: 1
    },
    restaurant:{
        padding: 15
    },
    menuContainer:{
        flex: 1,
        padding: 15
    },
    restName: {
        fontWeight: '800',
        fontSize: 30,
        marginVertical: 15
    },
    menu:{
        fontSize: 18,
        marginBottom: 5
    },
    menuItemName:{
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 5
    },
    menuItemDesc:{
        color: 'grey',
        marginBottom: 10,
    },
    menuItemPrice:{
        fontSize: 18,
        width: '100%',
        textAlign: 'right',
        fontWeight: '500',
        marginBottom: 15
    },
    hr:{
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
    },
    hrFull:{
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
    }
});

export default RestaurantDetailsScreen;