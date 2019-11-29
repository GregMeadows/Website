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

    interface TypeText {
        logo: string;
    }

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
            secondary: grey[600],
            logo: '#000',
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
            fontFamily: '"Alegreya Sans", sans-serif',
            fontWeight: 500,
            fontSize: '3rem',
        },
        h2: {
            fontFamily: '"Alegreya Sans", sans-serif',
            fontWeight: 400,
            fontSize: '2.5rem',
        },
        h3: {
            fontFamily: '"Source Code Pro", sans-serif',
            fontWeight: 400,
            fontSize: '1.5rem',
        },
        body1: {
            fontSize: '1.2rem',
        },
        subtitle1: {
            fontSize: '1.1rem',
        },
        subtitle2: {
            fontSize: '0.8rem',
        }
    },
    overrides: {
        MuiTypography: {
            h1: {
                marginTop: '1rem',
                marginBottom: '1rem',
            },
            body1: {
                marginTop: '1rem',
            }
        }
    }
});

// Grey Theme
export const greyscale = createMuiTheme({
    palette: {
        type: 'dark',
        text: {
            primary: '#fff',
            secondary: grey[400],
            logo: grey[400],
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
            fontSize: '3rem',
        },
        h2: {
            fontFamily: 'Alegreya Sans, sans-serif',
            fontWeight: 400,
            fontSize: '2.5rem',
        },
        h3: {
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            fontSize: '1.5rem',
        },
        body1: {
            fontSize: '1.2rem',
        },
        subtitle1: {
            fontSize: '1.1rem',
        },
        subtitle2: {
            fontSize: '0.8rem',
        }
    },
});