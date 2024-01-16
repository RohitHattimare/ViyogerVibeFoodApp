import { StyleSheet, Text, View } from "react-native";

function CartScreen() {
    return (
        <View style={styles.container}>
            <Text>
                Cart Screen
            </Text>
        </View>
    );
}

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    }
});