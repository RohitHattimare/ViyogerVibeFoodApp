import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import MenuItem from "../../components/MenuItem";
import FilledButton from "../../components/UI/FilledButton";
import { useNavigation } from "@react-navigation/native";

function MenuScreen() {
    const navigation = useNavigation();
    function orderHandler() {
        console.log("Order Clicked - Go to Cart");
        navigation.navigate('Cart');
    }

    const DISHES = require('../../contsants/dishes_data.json');
    return (
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.label}>
                    Explore Our Delightful Delicacies
                </Text>
                <FlatList
                    data={DISHES}
                    style={styles.listContainer}
                    renderItem={(itemData) => {
                        return (
                            <MenuItem
                                id={itemData.item.id}
                                cost={itemData.item.cost}
                                name={itemData.item.name}
                                image={itemData.item.image}
                                rating={itemData.item.rating}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.id}
                    alwaysBounceVertical={false}
                />
                <FilledButton onPress={orderHandler}>Order</FilledButton>
            </View>
        </ScrollView >
    );
}

export default MenuScreen;

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        fontWeight: 'bold',
        // padding: 10,
        marginHorizontal: 10,
        flex: 1,
    },
    listContainer: {
        flex: 1,
        // marginTop: 14,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginVertical: 6,
    }
});