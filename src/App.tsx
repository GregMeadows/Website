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

const useStyles = makeStyles(() => ({
    root: {
        background: `#F5F5F5 url(${Background}) repeat`,
        width: '100%',
        marginBottom: 300,
        paddingBottom: 100,
        minHeight: '100%',
        position: 'absolute',
        paddingLeft: 50,
        paddingRight: 50,
    },
    page: {
        marginTop: 'calc(4% + 30px)',
    }
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
                <section className={classes.root}>
                    <ThemeProvider theme={greyscale}>
                        <Navigation />
                    </ThemeProvider>
                    <section className={classes.page}>
                        <Switch>
                            <Route path="/" exact component={Homepage} />
                            <Route path="/about" exact component={About} />
                            <Route component={NotFound} />
                        </Switch>
                    </section>
                </section>
                <ThemeProvider theme={greyscale}>
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>
        </ThemeProvider>
    );

});