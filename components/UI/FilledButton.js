import { Pressable, StyleSheet, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { theme } from "../../contsants/Theme";

function FilledButton({ children, onPress }) {

    return (
        <Pressable
            onPress={onPress}
            android_ripple={{ color: "#38733861" }}
            style={styles.ButtonContainer} >
            <Text style={styles.title}>{children}</Text>
        </Pressable>
    );
}

export default FilledButton;

const styles = StyleSheet.create({
    ButtonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 20,
        backgroundColor: theme.yellow,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: theme.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 24,
    },
    title: {
        color: theme.green,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase',

    },
});