import { createMuiTheme } from "@material-ui/core";

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        head: SimplePaletteColorOptions,
    }
    interface PaletteOptions {
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
            main: '#454545'
        },
        secondary: {
            main: '#0099ff'
        },
        background: {
            default: '#252525'
        },
        head: {
            main: '#888888'
        }
    },
});