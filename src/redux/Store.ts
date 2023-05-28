import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter.slice';
import { exampleApi } from './services/exampleApi.service';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const Store = configureStore({
    reducer: {
        counterReducer,
        [exampleApi.reducerPath]: exampleApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([exampleApi.middleware])
});

setupListeners(Store.dispatch);

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
