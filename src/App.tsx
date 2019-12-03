import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { main, greyscale } from './theme';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
import { HideOnMobile } from './components/HideOnMobile';
import { Layout } from './components/Layout';

export const App: FunctionComponent = observer(() => {
    return (
        <ThemeProvider theme={main}>
            <CssBaseline />
            <BrowserRouter>
                <ScrollToTop />
                <ThemeProvider theme={greyscale}>
                    <Navigation />
                </ThemeProvider>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Homepage} />
                        <>
                            <HideOnMobile>
                                <Header />
                            </HideOnMobile>
                            <Switch>
                                <Route path="/about" exact component={About} />
                                <Route path="/contact" exact component={Contact} />
                                <Route path="/portfolio" exact component={Portfolio} />
                                <Route component={NotFound} />
                            </Switch>
                        </>
                    </Switch>
                </Layout>
                <ThemeProvider theme={greyscale}>
                    <Footer />
                </ThemeProvider>
            </BrowserRouter>
        </ThemeProvider>
    );

});