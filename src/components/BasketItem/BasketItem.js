import { View, Text, StyleSheet } from 'react-native'

const BasketItem = ({ basketDish }) =>{

    const getTotal = () => {
        return parseFloat(basketDish.price).toFixed(2)
    }

    return(
        <View style={styles.container}>
            <View style={styles.items}>
                <View style={styles.quantity}>
                    <Text>1</Text>
                </View> 
                <Text style={styles.text}>{basketDish.name}</Text>
            </View>
            <Text>$ {getTotal()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    items:{
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    quantity:{
        backgroundColor: 'lightgrey',
        height: 25,
        width: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    text:{
        fontWeight: '700',
        fontSize: 16,
        marginLeft: 15
    }
})

export default BasketItem;