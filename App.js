import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <TouchableOpacity style={styles.container}>
      {/* Restuarant Item */}
      <View style={styles.restaurantContainer}>
        <View style={styles.imageContainer}>
          <Image source={{
            uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant1.jpeg'
            }} 
            style={styles.image}
          />
        </View>
        <View style={styles.restaurantInfo}>
          <View style={styles.desc}>
            <Text style={styles.title}>El Cabo Coffe Bar Tres De Mayo</Text>
            <Text style={styles.subTitle}>$1.40 25-35 min</Text>
          </View>
          <View style={styles.rating}>
              <Text>4.0</Text>
          </View>
        </View>
      </View>


      <StatusBar style="auto" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  restaurantContainer:{
    width: '100%',
  },
  restaurantInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  
  },
  imageContainer:{
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
  },
  image:{
    width: '100%',
    aspectRatio: 5/3,
    marginVertical: 10,
    borderRadius: 10,
  },
  title:{
    fontSize: 18,
    fontWeight: '700'
  },
  subTitle:{
    color: 'grey',
    marginTop: 5
  },
  rating:{
    backgroundColor: '#eee',
    padding: 8,
    height: 35,
    justifyContent: 'center',
    borderRadius: '20%'
  },
});
