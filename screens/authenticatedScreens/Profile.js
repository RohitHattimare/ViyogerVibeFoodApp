import { ImageBackground, StyleSheet, Text, View } from "react-native";
import FilledButton from "../../components/UI/FilledButton";
import { useContext } from "react";
import { AuthContext } from "../../store/authContext";

function ProfileScreen() {
    const authCtx = useContext(AuthContext);
    

    function logOutHandler() {
        console.log("User Logged Out");
        authCtx.logout();
    }

    return (
        <ImageBackground
            style={styles.backgroundImage}
            imageStyle={{ zIndex: 0 }}
            source={require("../../assets/Images/BackgroundScreen.png")}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Text style={styles.text}>
                    User Name
                </Text>
                <FilledButton onPress={logOutHandler}>
                    Log Out
                </FilledButton>
            </View>
        </ImageBackground>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
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
    backgroundImage: {
        flex: 1,
        resizeMode: "cover", // or 'stretch' or 'contain'
    }
});