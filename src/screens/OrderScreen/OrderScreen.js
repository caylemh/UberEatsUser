import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import OrderListItem from '../../components/OrderListItem/OrderListItem'
import orders from '../../../assets/data/orders.json'

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Orders</Text>

      <FlatList 
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        ItemSeparatorComponent={() => <View style={styles.hr} />}
        style={{ flex: 1}}
      />
      
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        paddingTop: 50
    },
    title:{
        fontWeight: '800',
        fontSize: 20,
        marginBottom: 40,
        width: '100%',
        textAlign: 'center'
    },
    hr:{
        backgroundColor: 'lightgrey',
        height: 1,
        marginVertical: 15
    },
})