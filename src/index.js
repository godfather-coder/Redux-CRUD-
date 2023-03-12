import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import usersReducer from "./features/User"

const container = document.getElementById('root');

const root = createRoot(container);

const store = configureStore({
  reducer:{
    user:  usersReducer,
  },
})

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);


