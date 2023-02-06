import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootreducer from './Reducer/Combinereducer.js'
import {composeWithDevTools} from 'redux-devtools-extension'


const middleware=[thunk]
let Store = createStore(rootreducer, composeWithDevTools(applyMiddleware(...middleware)))
export default Store