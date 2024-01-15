import { ImageBackground, StyleSheet, View } from "react-native";
import SignUpForm from "../signup/SignUpScreen";
function SignUpScreen() {
    return (
        <View style={styles.container}>
            <SignUpForm />
        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
});