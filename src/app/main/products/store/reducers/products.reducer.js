import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {
    entities          : [],
    searchText        : '',
    productDialog: {
        type: 'new',
        props: {
            open: false
        },
        data: null
    }
};


const productsReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_PRODUCTS:
            {
                return {
                    ...state,
                    entities   : _.keyBy(action.payload, 'id'),
                };
            }
        case Actions.SET_SEARCH_TEXT:
            {
                return {
                    ...state,
                    searchText: action.searchText
                };
            }
        case Actions.RESET_PRODUCTS:
            {
                return {
                    ...state,
                    entities: [],
                };
            }
        case Actions.OPEN_NEW_PRODUCT_DIALOG:
            {
                return {
                    ...state,
                    productDialog: {
                        type: 'new',
                        props: {
                            open: true
                        },
                        data: null
                    }
                };
            }
        case Actions.CLOSE_NEW_PRODUCT_DIALOG:
            {
                return {
                    ...state,
                    productDialog: {
                        type: 'new',
                        props: {
                            open: false
                        },
                        data: null
                    }
                };
            }
        case Actions.OPEN_EDIT_PRODUCT_DIALOG:
            {
                return {
                    ...state,
                    productDialog: {
                        type: 'edit',
                        props: {
                            open: true
                        },
                        data: action.data
                    }
                };
            }
        case Actions.CLOSE_EDIT_PRODUCT_DIALOG:
            {
                return {
                    ...state,
                    productDialog: {
                        type: 'edit',
                        props: {
                            open: false
                        },
                        data: null
                    }
                };
            }
        default:
            {
                return state;
            }
    }
}

export default productsReducer;

