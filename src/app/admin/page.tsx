
'use client';

import AuthGuard from '@/components/auth-guard';
import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoveUpRight, LogOut } from 'lucide-react';
import Link from 'next/link';

function AdminDashboardContent() {
    const { user, logout } = useAuth();

    return (
        <div className="flex flex-col min-h-screen bg-muted/40">
             <header className="sticky top-0 z-40 w-full border-b bg-background">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <MoveUpRight className="h-6 w-6 text-primary" />
                    <h1 className="font-headline text-2xl font-bold">CareerLeap</h1>
                    <span className="text-sm font-medium text-muted-foreground ml-2 border-l pl-4">Admin Portal</span>
                </Link>
                <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">Welcome, {user?.username}!</span>
                    <Button variant="outline" onClick={logout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </div>
                </div>
            </header>
            <main className="flex-1 p-4 md:p-8">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold font-headline mb-6">Admin Dashboard</h2>
                    <Card>
                        <CardHeader>
                            <CardTitle>System Management</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                This is the admin dashboard. From here, you can manage users, view site analytics, and configure platform settings.
                            </p>
                            {/* Admin-specific components and data would go here */}
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}


export default function AdminPage() {
  return (
    <AuthGuard allowedRoles={['admin']}>
      <AdminDashboardContent />
    </AuthGuard>
  );
}
