import { View, Text, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import orders from '../../../assets/data/orders.json'
import restaurants from '../../../assets/data/restaurants.json'
import styles from './styles'
import BasketItem from '../../components/BasketItem/BasketItem';

const order = orders[0]

const OrderDetailsHeader = () => {

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.screen}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
                <Ionicons name='arrow-back-circle' size={40} color={'white'} />
            </TouchableOpacity>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.2)', 'transparent']} style={styles.gradient} />
            <ImageBackground 
                source={{uri: order.Restaurant.image}} 
                style={styles.restImage}
            />
            <View style={styles.restaurant} >
                <View style={styles.info}>
                    <Text style={styles.restName}>{order.Restaurant.name}</Text>
                    <Text>
                        {order.status}  ·  {order.createdAt}
                    </Text>
                </View>
                <View style={styles.hrFull} />
                <Text style={styles.text}>Your Order</Text>
            </View>
        </View>
    </View>
  )
}

const OrderDetails = () => {
  return (
    <>
      <FlatList 
          data={restaurants[0].dishes}
          renderItem={({ item }) => <BasketItem basketDish={ item } />}
          ListHeaderComponent={() => <OrderDetailsHeader />}
          ItemSeparatorComponent={() => <View style={styles.hr} />}
          style={{ width: '100%', backgroundColor: 'white'}}
      />

      <StatusBar style='light' />
    </>
  )
}

export default OrderDetails