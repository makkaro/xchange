import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/EvilIcons'

function HomeView({ navigation }) {
    const { colors } = useTheme()

    const SettingsAnchor = () => (
        <TouchableOpacity style={stl.settingsAnchor}
                          onPress={() => navigation.navigate('Settings')}>
            <Icon name='gear' size={30} color={colors.notification}/>
        </TouchableOpacity>
    )

    useLayoutEffect(function() {
        navigation.setOptions({ headerRight: SettingsAnchor })
    }, [navigation])

    return (
        <View style={{ backgroundColor: colors.background, ...stl.container }}>
            <Icon name='refresh' size={300} color={colors.text}/>
            <TouchableOpacity onPress={() => navigation.navigate('Currencies')}>
                <Text style={{
                    color: colors.text,
                    borderColor: colors.text,
                    ...stl.currenciesAnchor
                }}>waluty</Text>
            </TouchableOpacity>
        </View>
    )
}


const stl = StyleSheet.create({
    settingsAnchor: {
        marginRight: 10
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        paddingVertical: 100
    },
    currenciesAnchor: {
        fontFamily: 'free-mono-bold',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginTop: 20
    }
})

export default HomeView
