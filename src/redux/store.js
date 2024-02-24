import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import contactReducer from './contacts/contactsSlice';

const persistContactConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'],
};

const persistedContactsReducer = persistReducer(
  persistContactConfig,
  contactReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
