import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const MenuItem = ({ dish }) => {
    return(
        <TouchableOpacity>
            <View style={styles.menuContainer}>
                <View style={styles.menuText}>
                    <Text style={styles.menuItemName}>{dish.name}</Text>
                    <Text style={styles.menuItemDesc}>{dish.description}</Text>
                    <Text style={styles.menuItemPrice}>${dish.price  }</Text>
                </View>
                {dish.image && (
                    <Image source={{uri: dish.image}} style={styles.image} />
                )}
            </View>
        </TouchableOpacity>
    )
}

export default MenuItem;