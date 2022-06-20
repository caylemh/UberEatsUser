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
    title:{
        fontSize: 30,
        fontWeight: '800',
        marginVertical: 10
    },
    subtitle:{
        marginVertical: 10,
        color: 'grey',
        fontSize: 18,
        fontWeight: '700'
    },
    list:{
        height: '40%',
        backgroundColor: 'lightgrey',
        borderTopLeftRadius: '20%',
        borderTopRightRadius: '20%'
    },
    hr:{
        backgroundColor: 'lightgrey',
        height: 1,
        marginVertical: 10
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
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
    },
    total:{
        fontWeight: '700',
        fontSize: 16
    }
})