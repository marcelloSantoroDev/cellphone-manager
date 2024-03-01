import { useMemo } from "react";
import AppContext from "./AppContext";
import { useState } from 'react';
import { productApi } from '../mocks/productApi.mock';

function AppProvider ({ children }) {
    const [addProduct, setAddProduct] = useState({
        name: '',
        brand: '',
        model: '',
        price: '',
        color: '',
    });

    const [editProduct, setEditProduct] = useState({
        name: '',
        brand: '',
        model: '',
        price: '',
        color: '',
    });

    const [productsList, setProductsList] = useState(productApi);

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    })


    const [userSignup, setUserSignup] = useState({
        email: '',
        password: '',
    })


    const values = useMemo(() => ({
        addProduct,
        setAddProduct,
        productsList,
        setProductsList,
        editProduct,
        setEditProduct,
        userLogin,
        setUserLogin,
        userSignup,
        setUserSignup
    }),[addProduct, productsList, editProduct, userLogin, userSignup]);

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;