import React, { FunctionComponent, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css';
import { Homepage } from './components/Homepage';
import { About } from './components/About';
import { NotFound } from './components/NotFound';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import Background from './images/bg.jpg';
import { CssBaseline } from '@material-ui/core';
import { main } from './theme';

const useStyles = makeStyles(() => ({
    root: {
        background: `#F5F5F5 url(${Background}) repeat`
    }
}), {
    classNamePrefix: 'app',
});

export const App: FunctionComponent = observer(() => {
    
    const classes = useStyles();

    useLayoutEffect(function() {
        document.body.className = classes.root;
    });

    return (
        <ThemeProvider theme={main}>
            <CssBaseline />
            <BrowserRouter>
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
            </BrowserRouter>
        </ThemeProvider>
    );

});