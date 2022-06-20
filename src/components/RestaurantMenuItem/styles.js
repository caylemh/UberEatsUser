import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    menuContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    menuItemName:{
        fontSize: 18,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10
    },
    menuItemDesc:{
        color: 'grey',
        marginBottom: 10,
        width: 240
    },
    menuItemPrice:{
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 15
    },
    image:{
        position: 'absolute',
        left: 280,
        height: 80,
        aspectRatio: 1,
        borderRadius: 20,
    },
})

export default styles;