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

    const [productsList, setProductsList] = useState(productApi);


    const values = useMemo(() => ({
        addProduct,
        setAddProduct,
        productsList,
        setProductsList
    }),[addProduct, productsList]);

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;