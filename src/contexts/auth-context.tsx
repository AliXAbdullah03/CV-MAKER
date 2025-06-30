
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type UserRole = 'student' | 'hr' | 'admin';
interface User {
  role: UserRole;
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Hardcoded credentials for the prototype
    if (password === '22939') {
      let role: UserRole | null = null;
      if (username.toLowerCase() === 'student') role = 'student';
      if (username.toLowerCase() === 'hr') role = 'hr';
      if (username.toLowerCase() === 'admin') role = 'admin';

      if (role) {
        const userData = { username, role };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        // Redirect based on role
        if (role === 'student') router.push('/dashboard');
        if (role === 'hr') router.push('/hr-dashboard');
        if (role === 'admin') router.push('/admin');
        return true;
      }
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  const value = { user, login, logout, loading };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
