'use strict';

import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Root from './components/root';
import Home from './components/home';
import Documentation from './components/documentation';
import Contacts from './components/contacts';
import Partners from './components/partners';
import S200DR from './components/S200DR';
import S315DR from './components/S315DR';
import S200TGI from './components/S200TGI';
import S315TGI from './components/S315TGI';
import S315CNC from './components/S315CNC';

let routes = (
    <Route path="/" component={Root}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="documentation" component={Documentation} />
        <Route path="contacts" component={Contacts} />
        <Route path="partners" component={Partners} />
        <Route path="S200DR" component={S200DR} />
        <Route path="S315DR" component={S315DR} />
        <Route path="S200TGI" component={S200TGI} />
        <Route path="S315TGI" component={S315TGI} />
        <Route path="S315CNC" component={S315CNC} />
        <Redirect from="*" to="Home" />
    </Route>
);

export default routes;