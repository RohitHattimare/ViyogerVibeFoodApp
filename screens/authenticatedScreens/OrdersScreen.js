import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import FilledButton from "../../components/UI/FilledButton";
import { useNavigation } from "@react-navigation/native";
import OrderContext from "../../store/orderContext";
import { useContext } from "react";
import OrderItem from "../../components/OrderItem";

function OrderScreen() {
    const navigation = useNavigation();
    const orderCtx = useContext(OrderContext);
    const orders = orderCtx.orders;

    function closeButtonHandler() {
        navigation.navigate("Home");
    }

    return (
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.label}>
                    Order History:
                </Text>
                <FlatList
                    data={orders}
                    style={styles.listContainer}
                    renderItem={(itemData) => {
                        return (
                            <OrderItem
                                name={itemData.item.name}
                                paymentMethod={itemData.item.paymentMethod}
                                price={itemData.item.price}
                                status={itemData.item.status}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={() => (
                        <Text style={styles.orderLabel}> No orders to show </Text>
                    )}
                    alwaysBounceVertical={false}
                />
                <FilledButton onPress={closeButtonHandler}>Close</FilledButton>
            </View>
        </ScrollView >
    );
}

export default OrderScreen;

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: 'bold',
        // padding: 10,
        marginHorizontal: 10,
        flex: 1,
    },
    listContainer: {
        flex: 1,
        // marginTop: 14,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginVertical: 6,
    },
    orderLabel: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
        marginVertical: 6,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,

    }
});