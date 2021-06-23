function convert(amount, value, convertFn) {
    amount = parseFloat(amount)
    if (Number.isNaN(amount)) {
        return ''
    }
    let out = convertFn(amount, value)
    return out.toFixed(4).toString()
}

const toBase = (amount, value) => amount * value

const toForeign = (amount, value) => amount / value

export { convert, toBase, toForeign }
