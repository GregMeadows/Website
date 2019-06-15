import { createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

// Material UI Overrides
declare module '@material-ui/core/styles/createPalette' {
    // interface Palette {
    //     custom: PaletteColor,
    // }
    // interface PaletteOptions {
    //     custom?: PaletteColorOptions,
    // }

    interface TypeBackground {
        highlight: string,
    }
}

// Main Colour Theme
export const main = createMuiTheme({
    palette: {
        type: 'light',
        text: {
            primary: '#000',
            secondary: '#000',
        },
        primary: {
            main: '#0099ff',
        },
        secondary: {
            main: '#ff5900',
        },
        background: {
            default: '#F5F5F5',
            paper: '#F5F5F5',
            highlight: grey[200],
        },
    },
    typography: {
        h1: {
            fontFamily: 'Alegreya Sans, sans-serif',
            fontWeight: 500,
        },
        h2: {
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
        },
        h3: {
            fontFamily: 'Alegreya Sans, sans-serif',
        },
        subtitle2: {
            fontSize: '0.8rem',
        }
    },
});

// Grey Theme
export const greyscale = createMuiTheme({
    palette: {
        type: 'dark',
        text: {
            primary: '#fff',
            secondary: grey[400],
        },
        primary: {
            light: grey[500],
            main: grey[600],
        },
        secondary: {
            main: '#0099ff',
        },
        background: {
            default: grey[800],
            paper: grey[800],
            highlight: grey[700],
        },
    },
    typography: {
        h1: {
            fontFamily: 'Alegreya Sans, sans-serif',
            fontWeight: 500,
        },
        h2: {
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 500,
        },
        h3: {
            fontFamily: 'Alegreya Sans, sans-serif',
        },
        subtitle2: {
            fontSize: '0.8rem',
        }
    },
});