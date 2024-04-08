// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  // Opcionalmente, puedes pasar configuraciones adicionales aquí
  // Por ejemplo: middleware, devTools, enhancers, etc.
});

export default store;
