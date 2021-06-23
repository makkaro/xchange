import { DarkTheme, DefaultTheme } from '@react-navigation/native'

const Default = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'hsl(345, 100%, 69%)',
        background: 'hsl(36, 71%, 97%)',
        card: 'hsl(351, 11%, 88%)',
        text: 'hsl(285, 5%, 12%)',
        border: 'hsl(285, 5%, 17%)',
        notification: 'hsl(285, 5%, 17%)',
    }
}

const Dark = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: 'hsl(345, 100%, 69%)',
        background: 'hsl(285, 5%, 17%)',
        card: 'hsl(285, 5%, 12%)',
        text: 'hsl(20, 96%, 70%)',
        border: 'hsl(320, 1%, 40%)',
        notification: 'hsl(285, 5%, 17%)'
    }
}

export { Dark, Default }
