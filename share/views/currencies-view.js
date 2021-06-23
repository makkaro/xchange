import React, { useState, useEffect } from 'react'
import { StyleSheet, ActivityIndicator, FlatList, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { getTable } from '../ctx'
import TableRow from '../components/table-row'

function CurrenciesView() {
    const { colors } = useTheme()

    const [loading, setLoading] = useState(true)
    const [table, setTable] = useState(null)

    useEffect(async function() {
        setTable(await getTable())
        setLoading(false)
    }, [])

    return (
        <View style={loading ? stl.container : null}>
            {loading
                ? <ActivityIndicator size={100} color={colors.primary}/>
                : <FlatList data={table}
                            renderItem={({ item }) => (
                                <TableRow item={item}/>
                            )}
                            keyExtractor={item => item.id}/>}
        </View>
    )
}

const stl = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 30
    }
})

export default CurrenciesView
