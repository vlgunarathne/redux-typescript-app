import { combineReducers } from 'redux';
import cakeReducer from './cake/CakeReducer';
import iceCreamReducer from './iceCream/IceCreamReducer';
import userReducer from './user/UserReducer';


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
});

export default rootReducer