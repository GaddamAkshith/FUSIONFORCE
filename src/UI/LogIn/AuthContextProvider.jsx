import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [filter, setFilter] = useState("");

    return (
        <AuthContext.Provider value={{ filter, setFilter }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;