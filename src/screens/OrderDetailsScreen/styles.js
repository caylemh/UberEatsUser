import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    screen:{
        flex: 1,
    },
    gradient:{
        width:'100%',
        aspectRatio: 5/2,
        position: 'absolute',
        zIndex: 1
    },
    iconContainer:{
        position: 'absolute',
        top: 30,
        left: 15,
        zIndex: 2
    },
    restImage:{
        width:'100%',
        aspectRatio: 5/3,
        zIndex: 0
    },
    restaurant:{
        top: -30,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 10
    },
    info:{
        paddingVertical: 15
    },
    restName: {
        fontWeight: '800',
        fontSize: 30,
        marginVertical: 10
    },
    restInfo:{
        marginBottom: 15
    },
    text:{
        fontSize: 18,
        color: 'grey',
        fontWeight: '600',
        paddingTop: 15
    },
    hr:{
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginHorizontal: 15
    },
    hrFull:{
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
    },
})

export default styles;