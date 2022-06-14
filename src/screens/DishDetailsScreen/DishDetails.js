import { View, Text, StyleSheet, Pressable } from 'react-native'
import restaurants from '../../../assets/data/restaurants.json'
import { Feather } from 'react-native-vector-icons'
import { useState } from 'react';

const dish = restaurants[0].dishes[1];

const DishDetails = () => {

    const [quantity, setQuantity] = useState(1);

    const onMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        
    }

    const onPlus = () => {
        setQuantity(quantity + 1);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{dish.name}</Text>
            <Text style={styles.desc}>{dish.description}</Text>
            <View style={styles.hr} />
            <View style={styles.quantityRow}>
                <View style={styles.row}>
                    <Feather name='minus-circle' size={45} color={'black'} onPress={onMinus}/>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <Feather name='plus-circle' size={45} color={'black'} onPress={onPlus} />
                </View>
            </View>
            <View style={styles.basketBtn}>
                <Text style={styles.basketText} >{`Add ${quantity} to basket `} 23.90 $</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 15,
        width: '100%',
    },
    title:{
        fontSize: 30,
        fontWeight: '800',
        marginVertical: 10
    },
    desc:{
        marginVertical: 10,
        color: 'grey'
    },
    hr:{
        backgroundColor: 'lightgrey',
        height: 1,
        marginVertical: 10
    },
    quantityRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    row:{
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    quantity:{
    fontSize: 20,
    fontWeight: '600',
    color: 'grey'
    },
    basketBtn:{
        backgroundColor: 'black',
        width:'100%',
        height:55,
        borderRadius: 10
    },
    basketText:{
        color: 'white',
        fontWeight: '500'
    }   
})

export default DishDetails;