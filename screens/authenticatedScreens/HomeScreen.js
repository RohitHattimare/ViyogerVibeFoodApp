import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Input from "../../components/UI/Input";
import { useState } from "react";
import FilledButton from "../../components/UI/FilledButton";

function HomeScreen({ navigation }) {
  const [enteredPlace, setEnteredPlace] = useState();
  console.log(navigation);
  function buttonPressHandler() {
    navigation.navigate("ResturantList");
  }

  return (
    <ImageBackground
      style={styles.backgroundImage}
      imageStyle={{ zIndex: 0 }}
      source={require("../../assets/Images/BackgroundScreen.png")}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>
            Welcome {"\n"}To{"\n"} VoyogerVibe
          </Text>
        </View>
        <View style={styles.input}>
          <Input
            label={"Enter Current Location"}
            placeholder={"Enter location"}
            value={enteredPlace}
            keyboardType={"email-address"}
            onChange={setEnteredPlace}
            securedText={false}
          />
          <FilledButton onPress={buttonPressHandler}>Next</FilledButton>
        </View>
      </View>
    </ImageBackground >
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 10,
    margin: 20,
    textAlign: "center",
  },
  input: {
    marginVertical: 20,
    width: "80%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' or 'contain'
  }
});
