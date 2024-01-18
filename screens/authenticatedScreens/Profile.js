import { ImageBackground, StyleSheet, Text, View } from "react-native";
import FilledButton from "../../components/UI/FilledButton";
import { useContext } from "react";
import { AuthContext } from "../../store/authContext";
import { useNavigation } from "@react-navigation/native";

function ProfileScreen() {
    const authCtx = useContext(AuthContext);
    const navigation = useNavigation();

    function logOutHandler() {
        console.log("User Logged Out");
        authCtx.logout();
    }

    function orderHistoryHandler() {
        console.log("Opened Order History");
        navigation.navigate("Orders");
    }

    return (
        <ImageBackground
            style={styles.backgroundImage}
            imageStyle={{ zIndex: 0 }}
            source={require("../../assets/Images/BackgroundScreen.png")}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>
                        User Name
                    </Text>
                </View>
                <View>
                    <FilledButton onPress={orderHistoryHandler}>
                        Order History
                    </FilledButton>
                    <FilledButton onPress={logOutHandler}>
                        Log Out
                    </FilledButton>
                </View>
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
        flex: 1,
        justifyContent: "space-between",
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