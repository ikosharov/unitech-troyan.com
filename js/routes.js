'use strict';

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/root';
import Home from './components/home';
import Documents from './components/documents';
import Contacts from './components/contacts';
import Partners from './components/partners';

let routes = (
    <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="Home" component={Home} />
        <Route path="Documents" component={Documents} />
        <Route path="Contacts" component={Contacts} />
        <Route path="Partners" component={Partners} />
        <Redirect from="*" to="Home" />
    </Route>
);

export default routes;