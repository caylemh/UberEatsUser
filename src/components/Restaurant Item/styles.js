import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    restaurantContainer:{
      width: '100%',
      marginBottom: 15
    },
    restaurantInfo:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 5
    },
    imageContainer:{
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
    },
    image:{
      width: '100%',
      aspectRatio: 5/3,
      marginVertical: 10,
      borderTopLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    title:{
      fontSize: 18,
      fontWeight: '700'
    },
    subTitle:{
      color: 'grey',
      marginTop: 5,
      fontWeight: '600'
    },
    rating:{
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 30,
      borderRadius: '20%',
    },
    ratingText:{
      fontWeight: '600'
    }
  });

export default styles;