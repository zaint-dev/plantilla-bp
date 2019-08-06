const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'example-component',
                'title': 'Example',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/example'
            },
            {
                'id'   : 'products-component',
                'title': 'Productos',
                'type' : 'item',
                'icon' : 'ballot',
                'url'  : '/products'
            },
            {
                'id'      : 'dashboards',
                'title'   : 'Dashboards',
                'type'    : 'collapse',
                'icon'    : 'dashboard',
                'children': [
                    {
                        'id'   : 'analytics-dashboard',
                        'title': 'Analytics',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/analytics'
                    },
                    {
                        'id'   : 'project-dashboard',
                        'title': 'Project',
                        'type' : 'item',
                        'url'  : '/apps/dashboards/project'
                    }
                ]
            },
            {
                'id'   : 'calendar',
                'title': 'Calendario',
                'type' : 'item',
                'icon' : 'today',
                'url'  : '/apps/calendar'
            },
            {
                'id'      : 'e-commerce',
                'title'   : 'Comercio E.',
                'type'    : 'collapse',
                'icon'    : 'shopping_cart',
                'url'     : '/apps/e-commerce',
                'children': [
                    {
                        'id'   : 'e-commerce-products',
                        'title': 'Products',
                        'type' : 'item',
                        'url'  : '/apps/e-commerce/products',
                        'exact': true
                    },
                ]
            },
            {
                'id'   : 'mail',
                'title': 'Correo',
                'type' : 'item',
                'icon' : 'email',
                'url'  : '/apps/mail',
                'badge': {
                    'title': 25,
                    'bg'   : '#F44336',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'file-manager',
                'title': 'Manejador Archivos',
                'type' : 'item',
                'icon' : 'folder',
                'url'  : '/apps/file-manager'
            },
            {
                'id'   : 'contacts',
                'title': 'Contactos',
                'type' : 'item',
                'icon' : 'account_box',
                'url'  : '/apps/contacts/all'
            },
            {
                'id'   : 'chat',
                'title': 'Chat',
                'type' : 'item',
                'icon' : 'chat',
                'url'  : '/apps/chat',
                'badge': {
                    'title': 13,
                    'bg'   : 'rgb(9, 210, 97)',
                    'fg'   : '#FFFFFF'
                }
            },
            {
                'id'   : 'scrumboard',
                'title': 'Scrumboard',
                'type' : 'item',
                'icon' : 'assessment',
                'url'  : '/apps/scrumboard'
            },
        ]
    },
    {
        'id'      : 'auth',
        'title'   : 'Auth',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'login',
                'title': 'Login',
                'type' : 'item',
                'url'  : '/login',
                'icon' : 'lock'
            },
            {
                'id'   : 'register',
                'title': 'Register',
                'type' : 'item',
                'url'  : '/register',
                'icon' : 'person_add'
            },
            {
                'id'   : 'logout',
                'title': 'Logout',
                'type' : 'item',
                'url'  : '/logout',
                'icon' : 'exit_to_app'
            },
        ]
    },
];

export default navigationConfig;
