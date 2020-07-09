import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/ui/Layout';
import GlobalStyles from './utils/reset';
import store from './store';
import routes from './routes';

const App: FC = () => {
    return (
        <Provider store={store}>
            <GlobalStyles />
            <BrowserRouter>
                <Layout>
                    <Switch>
                        {routes.map(({ url, Component }) => (
                            <Route exact={true} key={url} path={url}>
                                <Component />
                            </Route>
                        ))}
                    </Switch>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
