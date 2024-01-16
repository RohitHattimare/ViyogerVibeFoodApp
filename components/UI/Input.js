import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({ label, placeholder, value, onChange, keyboardType, securedText }) {
    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={(text) => onChange(text)}
                    keyboardType={keyboardType}
                    secureTextEntry={securedText}
                />
            </View>
        </>
    );
}

export default Input;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        paddingHorizontal: 20,
        marginBottom: 8,
    },
    input: {
        height: 56,
        width: '99%',
        fontSize: 16,
        borderColor: 'gray',
        borderRadius: 56,
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 30,
    },
});