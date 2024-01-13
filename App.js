import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import LaunchScreen from './screens/LaunchScreen';

export default function App() {
  return (<>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.startScreen}
        imageStyle={{ zIndex: 2 }}
        source={require("./assets/background.jpg")}
        resizeMode="cover"
      >
        {/* <SafeAreaView style={styles.startScreen}> */}
        <LaunchScreen />
        {/* </SafeAreaView> */}
      </ImageBackground>
    </View>
  </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  startScreen: {
    flex: 1,
    justifyContent: "center",
  },
});
