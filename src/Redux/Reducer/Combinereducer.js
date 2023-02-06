import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import { product } from './productreducer'
import {AlertReducer} from './AlertReducer'
import { UserCart } from './CartReducer'
export default  combineReducers({
    auth:AuthReducer,
    product:product,
    alert:AlertReducer,
    cart:UserCart,
})