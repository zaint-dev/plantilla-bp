import axios from 'axios';
import showMessage from 'app/main/shared/showMessage';
import * as Messages from '../../strings';
// Constantes
export const GET_PRODUCTS = '[PRODUCTS APP] GET PRODUCTS';
export const RESET_PRODUCTS = '[PRODUCTS APP] RESET PRODUCTS';
export const OPEN_NEW_PRODUCT_DIALOG = '[PRODUCTS APP] OPEN NEW PRODUCT DIALOG';
export const CLOSE_NEW_PRODUCT_DIALOG = '[PRODUCTS APP] CLOSE NEW PRODUCT DIALOG';
export const OPEN_EDIT_PRODUCT_DIALOG = '[PRODUCTS APP] OPEN EDIT PRODUCT DIALOG';
export const CLOSE_EDIT_PRODUCT_DIALOG = '[PRODUCTS APP] CLOSE EDIT PRODUCT DIALOG';
export const ADD_PRODUCT = '[PRODUCT APP] ADD PRODUCT';
export const UPDATE_PRODUCT = '[PRODUCT APP] UPDATE PRODUCT';
export const REMOVE_PRODUCT = '[PRODUCT APP] REMOVE PRODUCT';
export const SET_SEARCH_TEXT = '[PRODUCT APP] SET SEARCH TEXT';

// Actions
export function getProducts() {
    const request = axios.get('/api/products/all', {});

    return (dispatch) => {
        request.then((response) => {

            dispatch({
                type: GET_PRODUCTS,
                payload: response.data,
            })

        });
    }
}

export function resetProducts() {
    return {
        type: RESET_PRODUCTS,
    }
}

export function setSearchText(event) {
    return {
        type: SET_SEARCH_TEXT,
        searchText: event.target.value
    }
}

export function openNewProductDialog() {
    return {
        type: OPEN_NEW_PRODUCT_DIALOG
    }
}

export function closeNewProductDialog() {
    return {
        type: CLOSE_NEW_PRODUCT_DIALOG
    }
}

export function openEditProductDialog(data) {
    return {
        type: OPEN_EDIT_PRODUCT_DIALOG,
        data
    }
}

export function closeEditProducttDialog() {
    return {
        type: CLOSE_EDIT_PRODUCT_DIALOG
    }
}

export function addProduct(newProduct) {
    return (dispatch, getState) => {

        const request = axios.post('/api/products/add-product', {
            newProduct
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: ADD_PRODUCT
                })
            ])
                .then(() => {
                    dispatch(getProducts())
                    showMessage(dispatch, Messages.PRODUCT_ADDED, 'default')
                })
                .catch(error => {

                })
        );
    };
}

export function updateProduct(product) {
    return (dispatch, getState) => {

        // const {routeParams} = getState().contactsApp.contacts;

        const request = axios.post('/api/products/update-product', {
            product
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: UPDATE_PRODUCT
                })
            ])
            .then(() => {
                dispatch(getProducts())
                showMessage(dispatch, Messages.PRODUCT_UPDATED, 'default')
            })
            .catch(error => {

            })
        );
    };
}

export function removeProduct(productId) {
    return (dispatch, getState) => {
        // const {routeParams} = getState().contactsApp.contacts;
        const request = axios.post('/api/products/remove-product', {
            productId
        });

        return request.then((response) =>
            Promise.all([
                dispatch({
                    type: REMOVE_PRODUCT
                })
            ])
            .then(() => {
                dispatch(getProducts())
                showMessage(dispatch, Messages.PRODUCT_REMOVED, 'default')
            })
            .catch(error => {

            })
        );
    };
}

