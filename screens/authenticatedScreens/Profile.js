import { StyleSheet, Text, View } from "react-native";

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>
                PROFILE sCREEN
            </Text>
        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    }
});