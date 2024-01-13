import { Pressable, StyleSheet, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { theme } from "../../contsants/Theme";
function OutlinedButton({ children, icon, onPress }) {

    return (
        <Pressable onPress={onPress} android_ripple={{ color: theme.secondary }} style={styles.ButtonContainer} >
            <AntDesign name={icon} size={18} color={theme.green} style={styles.icon} />
            <Text style={styles.title}>{children}</Text>
        </Pressable>
    );
}

export default OutlinedButton;

const styles = StyleSheet.create({
    ButtonContainer: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        margin: 4,
        borderWidth: 2,
        borderColor: theme.green,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        marginRight: 6,
    },
    title: {
        color: theme.green,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
});