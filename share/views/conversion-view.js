import React, { useState } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { convert, toBase, toForeign } from '../util/convert'
import ConversionInput from '../components/conversion-input'

function ConversionView({route: {params: { value, code, imgSrc }}}) {
    const { colors } = useTheme()

    const [amount, setAmount] = useState('')
    const [inForeign, setForeign] = useState(false)

    const baseValue = (1 / parseFloat(value)).toFixed(4).toString()
    const displayValue = inForeign
                       ? `(1PLN = ${baseValue}${code.toUpperCase()})`
                       : `(1${code.toUpperCase()} = ${value}PLN)`


    const baseAmount = inForeign ? convert(amount, value, toBase) : amount
    const foreignAmount = inForeign ? amount : convert(amount, value, toForeign)

    return (
        <View style={{ backgroundColor: colors.background, ...stl.body }}>
            <View style={{ backgroundColor: colors.card, ...stl.heading }}>
                <View style={stl.infoContainer}>
                    <View style={{
                              borderColor: colors.border,
                              ...stl.imgContainer
                          }}>
                        <Image style={stl.img}
                               source={require('../public/img/poland.png')}/>
                    </View>
                    <Icon name='refresh' size={80} color={colors.text}/>
                    <View style={{
                              borderColor: colors.border,
                              ...stl.imgContainer
                          }}>
                        <Image style={stl.img}
                               source={imgSrc}/>
                    </View>
                </View>
                <View style={stl.valueContainer}>
                    <Text style={{ color: colors.text, ...stl.value}}>
                        {displayValue}
                    </Text>
                </View>
            </View>
            <View style={{
                      backgroundColor: colors.card,
                      ...stl.inputContainer
                  }}>
                <Text style={{
                          color: colors.text,
                          ...stl.inputText
                      }}>
                    PLN:
                </Text>
                <ConversionInput style={{
                                     color: colors.text,
                                     ...stl.inputText,
                                     ...stl.input
                                 }}
                                 amount={baseAmount}
                                 onChangeText={handleBaseChangeText}/>
            </View>
            <View style={{
                      backgroundColor: colors.card,
                      ...stl.inputContainer
                  }}>
                <Text style={{
                          color: colors.text,
                          ...stl.inputText
                      }}>
                    {code.toUpperCase() + ':'}
                </Text>
                <ConversionInput style={{
                                     color: colors.text,
                                     ...stl.inputText,
                                     ...stl.input }}
                                 amount={foreignAmount}
                                 onChangeText={handleForeignChangeText}/>
            </View>
        </View>
    )

    function handleChangeText(txt, convertFn, inForeign = false) {
        const maxLength = 17
        if (convert(txt, value, convertFn).length > maxLength) return
        setAmount(txt)
        setForeign(inForeign)
    }

    function handleBaseChangeText(txt) {
        handleChangeText(txt, toForeign)
    }

    function handleForeignChangeText(txt) {
        handleChangeText(txt, toBase, true)
    }
}

const stl = StyleSheet.create({
    body: {
        flexGrow: 1,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    heading: {
        paddingVertical: 20,
        marginVertical: 10,
        borderRadius: 15
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgContainer: {
        borderWidth: 1
    },
    img: {
        height: 80,
        width: 120
    },
    valueContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    value: {
        fontFamily: 'free-mono-regular'
    },
    inputContainer: {
        marginVertical: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 15
    },
    inputText: {
        fontFamily: 'free-mono-bold',
        fontSize: 22,
    },
    input: {
        flexGrow: 1
    }
})

export default ConversionView
