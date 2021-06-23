import React from 'react'
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'

function TableRow({ item }) {
    const nav = useNavigation()

    const { colors } = useTheme()

    return (
        <TouchableOpacity onPress={() => nav.navigate('Conversion', item)}>
            <View style={{ backgroundColor: colors.card, borderColor: colors.border, ...stl.container }}>
                <View style={stl.imgCodeContainer}>
                    <View style={{
                        borderColor: colors.border,
                        ...stl.imgContainer
                    }}>
                        <Image style={stl.img} source={item.imgSrc}/>
                    </View>
                    <View style={stl.codeContainer}>
                        <Text style={{ color: colors.text, ...stl.text }}>
                            {item.name.toUpperCase()}
                        </Text>
                        <Text style={{ color: colors.text, ...stl.text }}>
                            {item.code.toUpperCase()}
                        </Text>
                    </View>
                </View>
                <View style={stl.valueContainer}>
                    <Text style={{
                        color: colors.text,
                        ...stl.text,
                        ...stl.value
                    }}>
                        {item.value.toFixed(4)}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const stl = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        maxHeight: 70,
        marginVertical: 5
    },
    imgCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgContainer: {
        maxHeight: 50,
        maxWidth: 80,
        borderWidth: 1
    },
    codeContainer: {
        marginLeft: 5
    },
    valueContainer: {
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'free-mono-bold',
        fontSize: 16
    },
    value: {
        fontSize: 20
    },
    img: {
        height: 40,
        width: 60
    }
})

export default TableRow
