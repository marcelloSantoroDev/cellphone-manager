import { useMemo } from "react";
import AppContext from "./AppContext";
import { useState } from 'react';

function AppProvider ({ children }) {
    const [addProduct, setAddProduct] = useState({
        name: '',
        brand: '',
        model: '',
        price: '',
        color: '',
    });


    const values = useMemo(() => ({
        addProduct,
        setAddProduct
    }),[addProduct]);

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;