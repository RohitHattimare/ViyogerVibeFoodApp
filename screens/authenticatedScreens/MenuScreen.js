import { StyleSheet, Text, View } from "react-native";

function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text>
                Menu Screen
            </Text>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    }
});