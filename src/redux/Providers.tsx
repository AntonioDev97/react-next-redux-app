'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './Store';

interface Props { children: React.ReactNode };

const Providers = ({ children }: Props) => {
    return (
        <Provider store={Store}>
            { children }
        </Provider>
    );
}

export default Providers;