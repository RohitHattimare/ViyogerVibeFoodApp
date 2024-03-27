import { Alert, FlatList, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import CartItem from "../Cart/CartItem";
import FilledButton from "../../../components/UI/FilledButton";
import { useContext, useState } from "react";
import CartContext from "../../../store/cartContext";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import OrderContext from "../../../store/orderContext";


function CartScreen() {
    const orderCtx = useContext(OrderContext);
    const navigation = useNavigation();
    const cartCtx = useContext(CartContext);
    const { items, totalAmount } = cartCtx;
    const hasItems = items.length > 0;
    let totalAmt = +totalAmount?.toFixed(2)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('CASH ON DELIVERY');

    console.log("Inside Cart - items", items);

    //Add Order to Context
    const addOrder = () => {
        orderCtx.addOrder({
            name: 'Haldiram',
            price: totalAmt,
            paymentMethod: 'Cash On Delivery',
            status: 'Cooking In-Progress',
        });
    };

    function checkoutHandler() {
        console.log("Checkout");
        if (!hasItems) {
            Alert.alert("No Items in Cart", "Please add items to cart");
        }
        else {
            Alert.alert("Success", `Your Order has been placed \n Please Collect Your Order \n From Restaurant `);
            addOrder();
            cartCtx.clearCart();
            navigation.navigate("Home")
        }
    }

    return (
        <ImageBackground
            style={styles.backgroundImage}
            // imageStyle={{ zIndex: 0 }}
            source={require("../../../assets/Images/BackgroundScreen.png")}
            resizeMode="cover"
        >
            <ScrollView>
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

                    {/* PAYMENT METHOD SELECTOR DROPDOWN */}
                    <View style={styles.dropdownContainer}>
                        <DropDownPicker
                            items={[
                                { label: 'GPay', value: 'gpay' },
                                { label: 'Cash on Delivery', value: 'cod' },
                                { label: 'UPI Address', value: 'upi' },
                            ]}
                            defaultValue={selectedPaymentMethod}
                            containerStyle={{ height: 40 }}
                            dropDownStyl={{ marginTop: -40 }}
                            style={{ backgroundColor: '#fafafa', zIndex: 1000 }}
                            modal={true}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={item => setSelectedPaymentMethod(item.value)}
                        />
                    </View>
                    {/* checkout button */}
                    <View>
                        <FilledButton onPress={checkoutHandler}>Checkout</FilledButton>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        overflow: 'visible',
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
    },
    dropdownContainer: {
        marginBottom: 50,
    }

});