import React from 'react'
import { TextInput } from 'react-native'

function ConversionInput({ style, amount, onChangeText }) {
    return (
        <TextInput style={style}
                   keyboardType='numeric'
                   maxLength={21}
                   textAlign='right'
                   value={amount}
                   onChangeText={onChangeText}/>
    )
}

export default ConversionInput
