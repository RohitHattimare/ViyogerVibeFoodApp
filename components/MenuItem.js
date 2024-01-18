import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../contsants/Theme";
import { AntDesign } from '@expo/vector-icons';
import IconButton from "./UI/IconButton"
import { useContext } from "react";
import CartContext from "../store/cartContext";

function MenuItem({ id, name, cost, rating, image }) {

    const cartCtx = useContext(CartContext);
    const { addItem, removeItem } = cartCtx;
    // const price = +cost;
    function addToCartHandler() {
        console.log("added 1 qty to cart");
        addItem({ id, name, price: cost, image, qty: 1 });
    }

    function removeFromCartHandler() {
        console.log("removed 1 qty from cart");
        removeItem(id);
    }

    return (
        <Pressable android_ripple={{ color: theme.accent }} >
            <View style={styles.container}>
                <View style={styles.data}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
                    <View style={styles.ratings}>
                        <Text style={styles.rating}>Rating:  {rating}</Text>
                        <AntDesign name="star" size={14} color={theme.ratings} />
                    </View>
                    <Text style={styles.price} numberOfLines={1} ellipsizeMode="tail">Rs. {cost}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <IconButton
                        name="remove-circle-outline"
                        size={24}
                        color="black"
                        onPress={removeFromCartHandler}
                    />
                    <Image style={styles.image} source={{ uri: image }} />
                    <IconButton
                        name="add-circle-outline"
                        size={24}
                        color="black"
                        onPress={addToCartHandler}
                    />
                </View>
            </View>
        </Pressable>
    );
}
export default MenuItem;

const styles = StyleSheet.create({
    container: {
        width: "98%",
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 4,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.lightGreen,
        elevation: 5, // For Android
    },
    image: {
        height: 85,
        width: 85,
        borderRadius: 5,
        // marginHorizontal: 4,
        paddingHorizontal: 10,
        borderColor: 'black',
        borderWidth: 1,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "black",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        marginVertical: 4,
    },
    price: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "green",
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    rating: {
        color: theme.ratings,
        fontWeight: "bold",
        marginRight: 5,
    },
    ratings: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        paddingVertical: 2,
        alignItems: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 10
    },
    data: {
        width: "60%"
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});