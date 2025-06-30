
'use client';

import React, { ReactNode } from 'react';
import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';

interface AuthGuardProps {
  children: ReactNode;
  allowedRoles: Array<'student' | 'hr' | 'admin'>;
}

export default function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    // You can return a loading spinner here
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  if (!user) {
    router.push('/login');
    return null;
  }

  if (!allowedRoles.includes(user.role)) {
    // Optional: redirect to a "not authorized" page or back to their own dashboard
    router.push('/login'); // Simple redirect to login for now
    return null;
  }

  return <>{children}</>;
}
