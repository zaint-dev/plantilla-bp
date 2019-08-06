import * as Actions from '../actions';
import _ from '@lodash';

const initialState = {

};

const productReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_PRODUCT:
        {
            return {
                ...action.payload
            };
        }
        default:
            return state;
    }
};

export default productReducer;