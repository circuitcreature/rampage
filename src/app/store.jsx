import { createStore, applyMiddleware } from 'redux'


import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'

import { composeWithDevTools } from 'redux-devtools-extension'
// import thunkMiddleware from 'redux-thunk'

import mediaReducer from '../features/media/mediaSlice'

// const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export default configureStore({
    reducer: {
        media: mediaReducer,
        user: userReducer
    },
    // composedEnhancer
})

