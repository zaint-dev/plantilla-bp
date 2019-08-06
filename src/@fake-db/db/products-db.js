import mock from './../mock';
import {FuseUtils} from '@fuse';
import _ from '@lodash';

const productDB = {
    products: [
        {
            id: '1',
            title: 'Mac',
            store: 'Apple',
            price: '1200',
            stock: '5',
        },
        {
            id: '2',
            title: 'Huawei P30',
            store: 'Huawei',
            price: '345',
            stock: '300',
        },
        {
            id: '3',
            title: 'A5',
            store: 'Samsung',
            price: '330',
            stock: '50',
        },
        {
            id: '4',
            title: 'Ryzen 7',
            store: 'AMD',
            price: '350',
            stock: '54',
        },
    ]
}


mock.onGet('/api/products/all').reply(() => {
    return [200, productDB.products];
});

mock.onPost('/api/products/add-product').reply((request) => {
    const data = JSON.parse(request.data);
    productDB.products = [
        ...productDB.products, {
            ...data.newProduct,
            id: FuseUtils.generateGUID()
        }
    ];
    return [200, productDB.products];
});

mock.onPost('/api/products/update-product').reply((request) => {
    const data = JSON.parse(request.data);

    productDB.products = productDB.products.map((product) => {
        if ( data.product.id === product.id )
        {
            return data.product
        }
        return product
    });

    return [200, productDB.products];
});

mock.onPost('/api/products/remove-product').reply((request) => {
    const data = JSON.parse(request.data);

    productDB.products = productDB.products.filter((product) => data.productId !== product.id);

    return [200, productDB.products];
});


mock.onGet('/api/products/product').reply((config) => {
    const {productId} = config.params;
    console.log(productId)

    const response = _.find(productDB.products, {id: productId});
    console.log(response)
    if ( response )
    {
        return [200, response];
    }
    else
    {
        return [404, 'La informacion del producto no existe.'];
    }
});