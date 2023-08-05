import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';

import 'primereact/resources/themes/tailwind-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'


import CurrencyData from './pages/CurrencyData';
import ErrorPage from './pages/ErrorPage';
import CurrencyDetails from './pages/CurrencyDetails';
import ExchangeDetails from './pages/ExchangeDetails';

function App() {
  return (
    <React.Fragment>        
        <HashRouter>
          <Switch>
              <Route path="/" component={CurrencyData} exact />
              <Route path="/crptodetails" component={CurrencyDetails} exact />
              <Route path="/crptoexchange" component={ExchangeDetails} exact />
              <Route component={ErrorPage} />
          </Switch>
        </HashRouter>
    </React.Fragment>
  );
}

export default App;
