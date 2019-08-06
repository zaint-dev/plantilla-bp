import Example from './Example';

export const ExampleConfig = {
    settings: {
        layout: {
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
            path: '/example',
            component: Example
        }
    ]
};

/**
 * Lazy load Example
 */
/*
import React from 'react';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};
*/
