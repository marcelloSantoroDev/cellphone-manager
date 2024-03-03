import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import authPost from './authPost';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const token = localStorage.getItem('token') || '';

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const result = await authPost(token);

                if (result.type === 'TOKEN_VALID'){
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Erro ao verificar autenticação:', error);
                // Lida com erros, se necessário
            }
        };

        checkAuthentication();
    }, [token]);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

export default PrivateRoute;
