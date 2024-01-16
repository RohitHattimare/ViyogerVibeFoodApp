import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import RestaurantItem from "../../components/ResturantItem";

function Resturants() {
    const RESTURANTS = require('../../contsants/resturant_data.json');
    return (
        <ScrollView >
            <View style={styles.container}>
                <Text style={styles.label}>
                    Nearby Places
                </Text>
                <FlatList
                    data={RESTURANTS}
                    style={styles.listContainer}
                    renderItem={(itemData) => {
                        return (
                            <RestaurantItem
                                restaurantName={itemData.item.restaurantName}
                                rating={itemData.item.rating}
                                typesOfFood={itemData.item.typesOfFood}
                                imageUri={itemData.item.imageUri}
                            />
                        );
                    }}
                    keyExtractor={(item) => item.phone}
                    alwaysBounceVertical={false}
                />
            </View>
        </ScrollView >
    );
}

export default Resturants;

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