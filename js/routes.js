'use strict';

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/root';
import Home from './components/home';
import Documentation from './components/documentation';
import Contacts from './components/contacts';
import Partners from './components/partners';

let routes = (
    <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="documentation" component={Documentation} />
        <Route path="contacts" component={Contacts} />
        <Route path="partners" component={Partners} />
        <Redirect from="*" to="Home" />
    </Route>
);

export default routes;