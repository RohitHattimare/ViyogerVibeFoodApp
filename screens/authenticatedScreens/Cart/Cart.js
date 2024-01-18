import { Alert, FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import CartItem from "../Cart/CartItem";
import FilledButton from "../../../components/UI/FilledButton";
import { useContext } from "react";
import CartContext from "../../../store/cartContext";

function CartScreen() {
    const cartCtx = useContext(CartContext);
    const { items, totalAmount } = cartCtx;
    const hasItems = items.length > 0;
    let totalAmt = +totalAmount?.toFixed(2)
    console.log("Inside Cart- items", items);

    function checkoutHandler() {
        console.log("Checkout");
        if (!hasItems) {
            Alert.alert("No Items in Cart", "Please add items to cart");
        }
    }

    return (
        <ImageBackground
            style={styles.backgroundImage}
            imageStyle={{ zIndex: 0 }}
            source={require("../../../assets/Images/BackgroundScreen.png")}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.text}>
                    Your Cart Items
                </Text>
                <View style={styles.flatlist}>
                    {/* flatlist with items in height 60% */}
                    <FlatList
                        data={items}
                        style={styles.listContainer}
                        renderItem={(itemData) => {
                            return (
                                <CartItem
                                    id={itemData.item.id}
                                    name={itemData.item.name}
                                    price={itemData.item.price}
                                    qty={itemData.item.qty}
                                    image={itemData.item.image}
                                />
                            );
                        }}
                        keyExtractor={(item) => String(item.id)}
                        ListEmptyComponent={() => (
                            <Text style={styles.text}>
                                Cart is Empty
                            </Text>)}
                        alwaysBounceVertical={false}
                    />
                </View>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>Total Price:</Text>
                    <Text style={styles.total}>Rs.{totalAmt}</Text>
                </View>
                <View>
                    {/* checkout button */}
                    <FilledButton onPress={checkoutHandler}>Checkout</FilledButton>
                </View>
            </View>
        </ImageBackground>
    );
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginVertical: 6,
        textAlign: "center",
    },
    totalLabel: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    total: {
        fontSize: 20,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover", // or 'stretch' or 'contain'
    },
    listContainer: {
        flex: 1,
        // marginTop: 14,
    },
    flatlist: {
        flex: 1,
    }
});