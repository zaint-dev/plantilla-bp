import axios from 'axios';
import history from '@history';
import {showMessage} from 'app/store/actions/fuse';
import * as Messages from '../../strings';

// Constantes
export const GET_PRODUCT = '[PRODUCT APP] GET PRODUCT';
export const RESET_PRODUCT = '[PRODUCT APP] RESET PRODUCT';

// Actions
export function getProduct(params) {
    const request = axios.get('/api/products/product', { params });

    return (dispatch) =>
        request.then(
            (response) =>
                dispatch({
                    type: GET_PRODUCT,
                    payload: response.data
                }),
            (error) => {
                dispatch(showMessage({
                    message: error.response.data,
                    autoHideDuration: 2000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                }));
                history.push({
                    pathname: '/products'
                });
            });
}