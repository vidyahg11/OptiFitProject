import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'; // Import this

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen once the app is loaded
  }, []);

  return (
    <SafeAreaView>
      <Text>Welcome to OptiFitProject!</Text>
    </SafeAreaView>
  );
};

export default App;
