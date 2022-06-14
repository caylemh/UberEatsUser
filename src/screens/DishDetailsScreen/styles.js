import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 15,
        width: '100%',
        justifyContent: 'space-between'
    },
    iconContainer:{
        position: 'absolute',
        top: 30,
        left: 15,
    },
    dish:{
        marginTop: 100
    },
    image:{
        width: '100%',
        aspectRatio: 3/1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginVertical: 10
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
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    basketText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    amount:{
        position: 'absolute',
        left: 270,
        color: 'white',
        fontSize: 16,
        fontWeight: '200'
    }
})