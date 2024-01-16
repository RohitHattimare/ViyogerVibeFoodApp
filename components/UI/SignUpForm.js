import { useContext, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Input from './Input';
import FilledButton from './FilledButton';
import { signupUser } from '../../firebase/users/userServices';
import { AuthContext } from '../../store/authContext';

function SignUpForm({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const authCtx = useContext(AuthContext);


    const isValidEmail = (email) => {
        // Simple email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password, confirmPassword) => {
        // Password should match and have at least 6 characters
        return password === confirmPassword && password.length >= 6;
    };

    // Mobile number validation function
    const isValidMobileNumber = (mobileNumber) => {
        // Mobile number should have 10 digits
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobileNumber);
    };

    function formCheck() {
        if (
            isValidEmail(email)
            && isValidPassword(password, confirmPassword)
            && isValidMobileNumber(mobileNumber)
        ) {
            signUpHandle();
        }
        else {
            Alert.alert("Invalid Credentials, Please Enter Correct credentials");
        }
    }

    const signUpHandle = () => {
        // Perform signup logic here
        console.log(`Signing up with email: ${email}, password: ${password}, and mobile number: ${mobileNumber}`);
        signupUser({ email, password, authCtx });
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Input
                label={"Email Input"}
                placeholder={"Enter your email "}
                keyboardType={"email-address"}
                value={email}
                onChange={setEmail}
            />
            <Input
                label={"Mobile Number:"}
                placeholder={"Enter your mobile number"}
                value={mobileNumber}
                onChange={setMobileNumber}
                keyboardType={"phone-pad"}
            />
            <Input
                label={"Password:"}
                placeholder={"Enter your password"}
                value={password}
                onChange={setPassword}
            />
            <Input
                label={"Confirm Password:"}
                placeholder={"Confirm password"}
                value={confirmPassword}
                onChange={setConfirmPassword}
            />

            <FilledButton onPress={formCheck}>Sign Up</FilledButton>
        </View>
    );
};
export default SignUpForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: 54,
        justifyContent: 'flex-start',
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
    },
    visibilityButton: {
        padding: 8,
    },
    backgroundImage: {
        flex: 1,
    },
});

