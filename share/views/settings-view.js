import React from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

function SettingsView({ theme, setTheme }) {
    const { colors } = useTheme()

    return (
        <View>
            <View style={{ borderColor: colors.border, ...stl.row }}>
                <Text style={{ color: colors.text, ...stl.text }}>
                    {'dark mode'.toUpperCase()}
                </Text>
                <Switch trackColor={{
                            false: colors.card,
                            true: colors.card
                        }}
                        thumbColor={colors.primary}
                        value={theme == 'dark'}
                        onValueChange={function() {
                            setTheme(theme == 'dark' ? 'default' : 'dark')
                        }}/>
            </View>
        </View>
    )
}

const stl = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12 ,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
    },
    text: {
        fontFamily: 'free-mono-bold',
        fontSize: 18,
    }
})

export default SettingsView
