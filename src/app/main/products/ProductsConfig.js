import React from 'react';
import {Redirect} from 'react-router-dom';
import ProductsContainer from './ProductsContainer';

export const ProductsConfig = {
    settings: {
        layout: {
            style : 'layout1',
            config: {
                scroll: 'content',
                navbar: {
                    display: true,
                    folded: true,
                    position: 'left'
                },
                toolbar: {
                    display: true, style: 'fixed', position: 'below'
                },
                footer: {
                    display: true, style: 'fixed', position: 'below'
                },
                mode: 'fullwidth'
            }
        }
    },
    routes: [
        {
            path: '/products',
            component: ProductsContainer
        },
        {
            path     : '/product/:productId/details',
            component: React.lazy(() => import('./Product'))
        },
    ]
};