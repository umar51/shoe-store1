import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state

const initialState = {
    addToCart: []                 //transactions to addToCart
}

// Create context

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteProduct(id) {       //deleteTransaction to deleteProduct
        dispatch({
            type: 'DELETE_PRODUCT',
            payload: id
        });
    }

    function addProduct(productBought) {  //addTransaction to addProduct
                                                //transaction to productBought
        dispatch({
            type: 'ADD_PRODUCT',
            payload: productBought
        });
    }

    return (<GlobalContext.Provider value={{
        addToCart: state.addToCart,        // transactions: state.transactions to addToCart: state.addToCart,
        deleteProduct,
        addProduct,
    }}>
        {children}
    </GlobalContext.Provider>);
}