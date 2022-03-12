import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

// Material UI Overrides
declare module '@mui/material/styles/createPalette' {
  interface TypeText {
    logo: string;
  }

  interface TypeBackground {
    highlight: string;
  }
}

const baseTheme = createTheme({
  typography: {
    h1: {
      fontFamily: '"Alegreya Sans", sans-serif',
      fontWeight: 500,
      fontSize: '2.6rem',
    },
    h2: {
      fontFamily: '"Alegreya Sans", sans-serif',
      fontWeight: 400,
      fontSize: '2rem',
    },
    h3: {
      fontFamily: '"Source Code Pro", sans-serif',
      fontWeight: 400,
      fontSize: '1.4rem',
    },
    body1: {
      fontSize: '1.2rem',
    },
    subtitle1: {
      fontSize: '1.1rem',
    },
    subtitle2: {
      fontSize: '0.8rem',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          marginTop: '1rem',
          marginBottom: '1rem',
        },
      },
    },
  },
});

// Main Colour Theme
export const main = createTheme(baseTheme, {
  palette: {
    mode: 'light',
    text: {
      primary: '#000',
      secondary: grey[600],
      logo: '#000',
    },
    primary: {
      main: '#0099ff',
    },
    secondary: {
      main: '#0099ff',
    },
    background: {
      default: '#F5F5F5',
      paper: '#F5F5F5',
      highlight: grey[200],
    },
  },
});

// Grey Theme
export const greyscale = createTheme(baseTheme, {
  palette: {
    mode: 'dark',
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
});
