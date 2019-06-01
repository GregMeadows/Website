import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import './App.css';
import { Homepage } from './components/Homepage';
import { About } from './components/About';
import { NotFound } from './components/NotFound';


export const App: FunctionComponent = observer(() => {

    return (
        <BrowserRouter>
            <div className="App">
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
        </BrowserRouter>
    );

});