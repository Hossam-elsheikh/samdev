"use client";
import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  setIsAuth: () => {},
});
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
