import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../contsants/Theme";
import IconButton from "../../../components/UI/IconButton";
import { useContext } from "react";
import CartContext from "../../../store/cartContext";

function CartItem({ id, name, qty, price, image }) {
    console.log("Inside List Cart Item ", id, name, qty, price, image);
    const cartCtx = useContext(CartContext);
    const { addItem, removeItem } = cartCtx;
    const numericPrice = +price;

    function addToCartHandler() {
        console.log("added 1 qty to cart");
        addItem({ id, name, price: numericPrice, image, qty: 1 });
    }

    function removeFromCartHandler() {
        console.log("removed 1 qty from cart");
        removeItem(id);
    }

    return (
        <View style={styles.container}>
            <View style={styles.data}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
                <View style={styles.priceContainer}>
                    <Text style={styles.price} numberOfLines={1} ellipsizeMode="tail">Rs. {numericPrice}</Text>
                    <Text style={styles.qty}>X {qty}</Text>
                </View>
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
    );
}

export default CartItem;

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
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderColor: 'black',
        borderWidth: 1,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "black",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        marginVertical: 4,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',

    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "green",
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    qty: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.ratings,
    },
    rating: {
        color: theme.ratings,
        fontWeight: "bold",
        marginRight: 5,
    },
    data: {
        width: "55%",
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});