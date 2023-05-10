import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import authReducer from "./state/Reducers/index.ts"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { PersistGate } from "redux-persist/integration/react"

import './index.css'

const persistConfig = { key: "root", storage, version: 1 }//set config storage 
const persistedReducer = persistReducer(persistConfig, authReducer)// combines configurations and reducer for the state
const store = configureStore({//sets new configuration over the base redux settings
  reducer: persistedReducer,// sets reducer
  middleware: (getDefaultMiddleware) =>// install middlewares
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
