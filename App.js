import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import { StyleSheet } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import BottomTabNavigation from './navigation/BottomTabNavigation'
import { Cart, ProductDetails } from './screens'

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    semiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    extraBold: require('./assets/fonts/Poppins-ExtraBold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'semiBold',
    fontSize: 20
  }
})
