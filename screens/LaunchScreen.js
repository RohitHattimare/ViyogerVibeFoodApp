import { ImageBackground, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import Logo from "../components/UI/Logo";

function LaunchScreen() {

    function signInHandler() {
        console.log("Sign In");
    }

    function signUpHandler() {
        console.log("Sign Up");
    }


    return (
        <ImageBackground
            style={styles.startScreen}
            imageStyle={{ zIndex: 2 }}
            source={require("../assets/Images/background.webp")}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.text}>
                    Where Every Destination is{"\n"}
                    a Delicious Discovery! {"\n"}
                    Order from Local Delights{"\n"}
                    Anywhere You Roam{"\n"}
                </Text>
                <View>
                    <Logo />
                </View>
                <View style={styles.buttonContainer}>
                    <OutlinedButton icon={"login"} onPress={signInHandler}>Sign Up</OutlinedButton>
                    <OutlinedButton icon={"adduser"} onPress={signUpHandler}>Log In</OutlinedButton>
                </View>
            </View>
        </ImageBackground>
    )
}

export default LaunchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"

    },
    text: {
        marginVertical: 20,
        fontSize: 17,
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        letterSpacing: 2,
    },
    logo: {
        justifyContent: "center",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: "center",
    },
    startScreen: {
        flex: 1,
        justifyContent: "center",
    },
});