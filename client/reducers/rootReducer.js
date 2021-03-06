import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sideBarReducer from './sideBarReducer';
import cartReducer from './cartReducer';
import checkoutReducer from './checkoutReducer';
import sharedReducer from './sharedReducer';

const rootReducer = combineReducers({
    form: formReducer,
    sideBar: sideBarReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    shared: sharedReducer
});

export default rootReducer;