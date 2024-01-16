import { Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function IconButton({ name, size, color, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <Ionicons name={name} size={size} color={color} />
        </Pressable>
    );
}

export default IconButton;