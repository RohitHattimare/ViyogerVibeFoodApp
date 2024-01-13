import { StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { theme } from "../../contsants/Theme";

function Logo() {
    return (
        <View style={style.logoContainer}>
            <Ionicons name="fast-food-sharp" size={64} color={theme.green} />
        </View>
    );
}

export default Logo;

const style = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginVertical: 24,
    },
});