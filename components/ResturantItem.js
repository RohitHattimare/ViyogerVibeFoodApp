import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../contsants/Theme";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function ResturantItem({ restaurantName, typesOfFood, rating, imageUri }) {
    const navigation = useNavigation();
    function handlePress() {
        console.log(" Resturant pressed");
        navigation.navigate("Menu")
    }

    return (
        <Pressable android_ripple={{ color: theme.accent }} onPress={handlePress} >
            <View style={styles.container}>
                <View style={styles.data}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{restaurantName}</Text>
                    <Text style={styles.foodtype} numberOfLines={1} ellipsizeMode="tail">{typesOfFood}</Text>
                    <View style={styles.ratings}>
                        <Text style={styles.rating}>Rating:  {rating}</Text>
                        <AntDesign name="star" size={14} color={theme.ratings} />
                    </View>
                </View>
                <View>
                    <Image style={styles.image} source={{ uri: imageUri }} />
                </View>
            </View>
        </Pressable>
    );
}

export default ResturantItem;

const styles = StyleSheet.create({
    container: {
        width: "98%",
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 4,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.lightGreen,
        elevation: 5, // For Android
    },
    image: {
        height: 85,
        width: 85,
        borderRadius: 5,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        borderColor: 'black',
        borderWidth: 1,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "black",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        marginVertical: 4,
    },
    foodtype: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "green",
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    rating: {
        color: theme.ratings,
        fontWeight: "bold",
        marginRight: 5,
    },
    ratings: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        paddingVertical: 2,
        alignItems: 'center',
        marginHorizontal: 10,
        paddingHorizontal: 10
    },
    ratinglabel: {

    },
    data: {
        width: "75%"
    }
});