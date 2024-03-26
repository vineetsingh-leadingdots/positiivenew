import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/authApi';
import authSlice from './slice/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import brandSlice from './masterSlice/brandSlice';
import { brandApi } from '../services/brandApi';
import { attributeApi } from '../services/attributeApi';
import { ratingApi } from '../services/ratingApi';
import supplierSlice from './supplierSlice/supplierSlice';
import { supplierApi } from '../services/supplierApi';
import roleSlice from './roleSlice/roleSlice';
import { roleApi } from '../services/roleApi';


const persistConfig = {
  key: "root", // This is the key used to store the data in storage
  storage // Use the storage type you imported (e.g., localStorage, AsyncStorage, etc.)
};

const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: {
    authUser: authSlice,
    brandData: brandSlice,
    supplierData: supplierSlice,
    roleData: roleSlice,
    persistedReducer,
    [authApi.reducerPath]: authApi.reducer,
    [brandApi.reducerPath]: brandApi.reducer,
    [supplierApi.reducerPath]: supplierApi.reducer,
    [attributeApi.reducerPath]: attributeApi.reducer,
    [ratingApi.reducerPath]: ratingApi.reducer,
    [roleApi.reducerPath]: roleApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(brandApi.middleware).concat(attributeApi.middleware).concat(ratingApi.middleware).concat(supplierApi.middleware).concat(roleApi.middleware)
});

export const persistor = persistStore(store);