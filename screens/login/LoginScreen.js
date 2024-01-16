import { Alert, Image, StyleSheet, Text, View } from "react-native";
import Input from "../../components/UI/Input";
import { useContext, useState } from 'react';
import FilledButton from "../../components/UI/FilledButton";
import { loginUser } from "../../firebase/users/userServices";
import { AuthContext } from "../../store/authContext";

function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authCtx = useContext(AuthContext);

    const isValidEmail = (email) => {
        // Simple email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        // Password should match and have at least 6 characters
        return password.length >= 6;
    };

    function formCheck() {
        if (isValidEmail(email) && isValidPassword(password)) {
            loginUser({ email, password, authCtx });
        }
        else {
            Alert.alert("Invalid Credentials, Please Enter Correct credentials");
        }
    }

    function logInHandler() {
        console.log(email, password);
        formCheck();
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.Icon}
                resizeMode="contain"
                source={require("../../assets/Images/juiceglass.png")}
            />
            <View style={styles.inputs}>
                <Input
                    label={"Email Id"}
                    placeholder={"Enter Email Address"}
                    value={email}
                    keyboardType={"email-address"}
                    onChange={setEmail}
                />
                <Input
                    label={"Password"}
                    placeholder={"Enter Password"}
                    value={password}
                    secureTextEntry={true}
                    onChange={setPassword}
                />
            </View>
            <FilledButton onPress={logInHandler}>Log In</FilledButton>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        justifyContent: "center",
    },
    Icon: {
        width: 150,
        height: 150,
        alignSelf: "center",
    },
    inputs: {
        marginHorizontal: 10,
        marginVertical: 40,
    }
});