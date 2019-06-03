import React, { FunctionComponent, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Background from './images/bg.jpg';
import { CssBaseline } from '@material-ui/core';
import { main, greyscale } from './theme';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

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
                <div className={classes.root}>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                            <Switch>
                                <Route path="/" exact component={Homepage} />
                                <Route path="/about" exact component={About} />
                                <Route component={NotFound} />
                            </Switch>
                </div>
                <ThemeProvider theme={greyscale}>
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>
        </ThemeProvider>
    );

});