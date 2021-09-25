import React, { createContext, useState, useContext } from 'react';
import api from '../services/api';

interface IAuthContext {
    logged: boolean;
    signIn(cpf: string, password: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@minha-carteira:logged');

        return !!isLogged;
    });

  const signIn = async (cpf: string, password: string) => {
    await api.post('/sessions/provider', {
      cpf,
      password
    }).then((res) => {
      localStorage.setItem('@minha-carteira:logged', 'true');
      localStorage.setItem('@minha-carteira:token', res.data.provider.token);
      setLogged(true);
    }).catch(() => {
      alert('Senha ou usuário inválidos!');
    });
    
    }

    const signOut = () => {
        localStorage.removeItem('@minha-carteira:logged');
        localStorage.removeItem('@manuellito-delivery:token');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };