import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderListItem = ({ order }) => {

    const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Order', {id: order.id})}>
        <Image 
            source={{uri: order.Restaurant.image}} 
            style={{ width: 75, height: 75, marginRight: 10, borderRadius: 20}}
        />
        <View style={styles.orderInfo}>
            <Text style={styles.title}>{ order.Restaurant.name }</Text>
            <Text style={styles.text}>3 items · $38.45</Text>
            <Text style={styles.text}>2 Days ago · {order.status}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default OrderListItem

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        width: '100%',
    },
    orderInfo:{
        flexDirection: 'column',
        height: '80%',
        justifyContent: 'space-between'
    },
    title:{
        fontSize: 18,
        fontWeight: '800',
        width: 270,
        marginBottom: 10
    },
    text:{
        color: 'grey',
        fontWeight: '600'
    }
})