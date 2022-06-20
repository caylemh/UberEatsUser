import { View, Text, TouchableOpacity, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import restaurants from '../../../assets/data/restaurants.json'
import { Feather ,Ionicons } from 'react-native-vector-icons'
import { useState } from 'react';
import styles from './styles'
import { get } from 'react-native/Libraries/Utilities/PixelRatio';
import { useNavigation } from '@react-navigation/native'

const dish = restaurants[0].dishes[0];

const DishDetails = () => {

    const navigation = useNavigation();

    const [quantity, setQuantity] = useState(1);

    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        
    }

    const onPlus = () => {
        setQuantity(quantity + 1);
    }

    const getTotal = () => {
        return parseFloat(dish.price * quantity).toFixed(2)
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back-circle' size={40} color={'black'} />
            </TouchableOpacity>
            <View style={styles.dish}>
                <Text style={styles.title}>{dish.name}</Text>
                <Text style={styles.desc}>{dish.description}</Text>
                <View style={styles.hr} />
                {dish.image && (
                    <Image source={{uri: dish.image}} style={styles.image} />
                )}
                <View style={styles.quantityRow}>
                    <View style={styles.row}>
                        <Feather name='minus-square' size={45} color={'black'} onPress={onMinus}/>
                        <Text style={styles.quantity}>{quantity}</Text>
                        <Feather name='plus-square' size={45} color={'black'} onPress={onPlus} />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.basketBtn} onPress={() => navigation.navigate('Basket')}>
                <Text style={styles.basketText} >{`Add ${quantity} to basket `}</Text>
                <Text style={styles.amount}>{getTotal()} $</Text>
            </TouchableOpacity> 

            <StatusBar style='dark' />
        </View>
    )
}

export default DishDetails;