import AsyncStorage from '@react-native-async-storage/async-storage'
import { tableDef } from './def'

async function getTable(def = tableDef) {
    /* "Unnecessary requests are unnecessary" */
    const prev = await storage.getTable()
    const dt = await storage.getDate()
    if (prev && dt == getEffectiveDate()) {
        return prev
    }
    const nbp = await getNBPDate()
    if (prev && dt == nbp) {
        return prev
    }
    const baseUrl = 'https://api.nbp.pl/api/exchangerates/rates/a/'
    for (const ccy of def) {
        const url = baseUrl + ccy.code + '?format=json'
        ccy.value = (await (await fetch(url)).json())['rates'][0]['mid']
    }
    await storage.setDate(nbp)
    await storage.setTable(def)
    return def
}

const storage = {
    setDate: async v => await AsyncStorage.setItem('date', v),
    getDate: async () => await AsyncStorage.getItem('date'),
    setTable: async v => await AsyncStorage.setItem('table', JSON.stringify(v)),
    getTable: async () => {
        const table = await AsyncStorage.getItem('table')
        return table ? JSON.parse(table) : null
    }
}

function getEffectiveDate() {
    const date = new Date
    /* Exchanges idle on Saturdays / Sundays */
    switch (date.getDay()) {
        case 0: date.setDate(date.getDate() - 2); break
        case 6: date.setDate(date.getDate() - 1); break
    }
    /* NBP format */
    const iso = date.toISOString()
    return iso.substr(0, iso.indexOf('T'))
}

async function getNBPDate() {
    const url = 'https://api.nbp.pl/api/exchangerates/tables/a?format=json'
    return (await (await fetch(url)).json())[0]['effectiveDate']
}

export { getTable }
