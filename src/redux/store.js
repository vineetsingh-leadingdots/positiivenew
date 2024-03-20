import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';
import authSlice from './slice/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import brandSlice from './masterSlice/brandSlice';
import { brandApi } from '../services/brandApi';

const persistConfig = {
  key: "root", // This is the key used to store the data in storage
  storage // Use the storage type you imported (e.g., localStorage, AsyncStorage, etc.)
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    authUser: authSlice,
    brandData: brandSlice,
    persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(brandApi.middleware)
});

export const persistor = persistStore(store);