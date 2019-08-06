import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';
import {LoginConfig} from 'app/main/login/LoginConfig';
import { ProductsConfig } from 'app/main/products/ProductsConfig';
const routeConfigs = [
    ExampleConfig,
    LoginConfig,
    ProductsConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
    {
        path     : '/',
        component: () => <Redirect to="/example"/>
    }
];

export default routes;
