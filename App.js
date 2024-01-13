import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import LaunchScreen from './screens/LaunchScreen';
import { useEffect, useState } from 'react';
import { SplashScreen } from 'expo';

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  // useEffect(() => {
  //   async function prepareApp() {
  //     try {
  //       // Prevent SplashScreen from auto-hiding
  //       await SplashScreen.preventAutoHideAsync();

  //       // Load your app assets here (e.g., images)
  //       const imageAssets = [require('./assets/background.jpg')];
  //       const cacheImages = imageAssets.map((image) =>
  //         Image.prefetch(image)
  //       );

  //       await Promise.all(cacheImages);

  //       // Indicate that the app is ready to be displayed, and hide SplashScreen
  //       setAppReady(true);
  //       await SplashScreen.hideAsync();
  //     } catch (e) {
  //       console.warn("Error in prepareApp: ", e);
  //     }
  //   }

  //   prepareApp();
  // }, []);

  // if (!isAppReady) {
  //   return null; // or a loading indicator
  // }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        style={styles.startScreen}
        imageStyle={{ zIndex: 2 }}
        source={require("./assets/background.jpg")}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.startScreen}>
          <LaunchScreen />
        </SafeAreaView>
      </ImageBackground>
    </View>
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
