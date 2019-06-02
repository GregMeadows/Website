import { createMuiTheme } from "@material-ui/core";

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        base: SimplePaletteColorOptions,
        head: SimplePaletteColorOptions,
    }
    interface PaletteOptions {
        base?: SimplePaletteColorOptions,
        head?: SimplePaletteColorOptions,
    }
}

export const main = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#0099ff'
        },
        secondary: {
            main: '#ff5900'
        },
        background: {
            default: '#F5F5F5'
        },
        base: {
            main: '#F5F5F5'
        },
        head: {
            main: '#000000'
        }
    },
});

export const greyscale = createMuiTheme({
    palette: {
        type: 'dark',
        text: {
            primary: '#fff'
        },
        primary: {
            main: '#444444'
        },
        secondary: {
            main: '#888888'
        },
        background: {
            default: '#222222'
        },
        base: {
            main: '#222222'
        },
        head: {
            main: '#888888'
        }
    },
});