import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../contsants/Theme";

function MenuItem({ name, price, paymentMethod, status }) {

    return (
        <Pressable android_ripple={{ color: theme.accent }} >
            <View style={styles.container}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
                <Text style={styles.price} numberOfLines={1} ellipsizeMode="tail">Rs. {price}</Text>
                <Text style={styles.payment} numberOfLines={1} ellipsizeMode="tail">Payment Mode: {paymentMethod}</Text>
                <Text style={styles.status} numberOfLines={1} ellipsizeMode="tail">Order Status : {status}</Text>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.lightGreen,
        elevation: 5, // For Android
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
    payment: {
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.gray,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    status: {
        fontSize: 15,
        fontWeight: 'bold',
        color: theme.gray,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
});