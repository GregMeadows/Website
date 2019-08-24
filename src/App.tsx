import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Background from './images/bg.jpg';
import { CssBaseline } from '@material-ui/core';
import { main, greyscale } from './theme';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';

const useStyles = makeStyles(() => ({
    root: {
        background: `#F5F5F5 url(${Background}) repeat`,
        width: '100%',
        overflowX: 'hidden',
        minHeight: '100%',
        marginTop: 0,
        marginBottom: 300,
        padding: '20px 10vw 100px',
    },
}), {
    classNamePrefix: 'app',
});

export const App: FunctionComponent = observer(() => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={main}>
            <CssBaseline />
            <BrowserRouter>
                <ScrollToTop />
                <ThemeProvider theme={greyscale}>
                    <Navigation />
                </ThemeProvider>
                <section className={`${classes.root} mui-fixed`}>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Homepage} />
                        <Route path="/about" exact component={About} />
                        <Route component={NotFound} />
                    </Switch>
                </section>
                <ThemeProvider theme={greyscale}>
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>
        </ThemeProvider>
    );

});