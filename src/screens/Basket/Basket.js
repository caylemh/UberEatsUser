import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { Ionicons } from 'react-native-vector-icons'
import { useState } from 'react';
import BasketItem from '../../components/BasketItem/BasketItem'
import styles from './styles'

const restaurant = restaurants[0];

const Basket = () => {

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <Ionicons name='arrow-back-circle' size={40} color={'black'} />
            </TouchableOpacity>
            <View style={styles.dish}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>Your Items</Text>

                <FlatList 
                    data={restaurant.dishes}
                    renderItem={({item}) => <BasketItem basketDish={item} />}
                    initialNumToRender={4}
                    style={styles.list}
                />
                <View style={styles.hr} />
                <View style={styles.row}>
                    <Text>Subtotal</Text>
                    <Text>$18.99</Text>
                </View>
                <View style={styles.row}>
                    <Text>Total</Text> 
                    <Text style={styles.total}>$33.53</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.basketBtn}>
                <Text style={styles.basketText} >Create Order</Text>
            </TouchableOpacity> 
        </View>
    )
}

export default Basket;