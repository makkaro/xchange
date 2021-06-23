import 'react-native-gesture-handler'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Dark, Default } from './themes'
import HomeView from './views/home-view'
import SettingsView from './views/settings-view'
import CurrenciesView from './views/currencies-view'
import ConversionView from './views/conversion-view'

function App() {
    const Stack = createStackNavigator()

    const [themeDef, setThemeDef] = useState(null)

    useLayoutEffect(function() {
        void async function() {
            const t = await AsyncStorage.getItem('themeDef')
            setThemeDef(t ?? 'default')
        }()
    }, [])

    useEffect(function() {
        void async function() {
            if (themeDef) await AsyncStorage.setItem('themeDef', themeDef)
        }()
    }, [themeDef])

    const theme = themeDef == 'default' ? Default : Dark

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{
                                 headerTintColor: theme.colors.notification,
                                 headerStyle: {
                                     backgroundColor: theme.colors.primary
                                 },
                                 headerTitleStyle: {
                                     fontFamily: 'free-mono-bold',
                                     fontSize: 22
                                 }
                             }}>
                <Stack.Screen name='Home'
                              component={HomeView}
                              options={{ title: 'xchange' }}/>
                <Stack.Screen name='Settings'
                              options={{ title: 'ustawienia' }}>
                    {props => <SettingsView {...props}
                                            theme={themeDef}
                                            setTheme={setThemeDef}/>}
                </Stack.Screen>
                <Stack.Screen name='Currencies'
                              component={CurrenciesView}
                              options={{ title: 'waluty' }}/>
                <Stack.Screen name='Conversion'
                              component={ConversionView}
                              options={{ title: 'konwersja' }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
