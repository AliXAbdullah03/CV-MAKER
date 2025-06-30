
'use client';

import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

import AuthGuard from '@/components/auth-guard';
import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { MoveUpRight, LogOut, Users, ClipboardList, DollarSign, Database, Shield } from 'lucide-react';

function AdminDashboardContent() {
    const { user, logout } = useAuth();

    // Mock data for dashboard
    const registrations = [
        { id: 1, name: 'Alex Johnson', role: 'Student', date: '2023-11-10' },
        { id: 2, name: 'Jane Doe', role: 'HR Professional', date: '2023-11-09' },
        { id: 3, name: 'Sam Wilson', role: 'Student', date: '2023-11-09' },
        { id: 4, name: 'John Smith', role: 'HR Professional', date: '2023-11-08' },
    ];

    const requests = [
        { id: 1, student: 'Alex Johnson', type: 'WET Request', hr: 'Jane Doe', status: 'Pending' },
        { id: 2, student: 'Maria Garcia', type: 'Mock Interview', hr: 'John Smith', status: 'Accepted' },
        { id: 3, student: 'Sam Wilson', type: 'WET Request', hr: 'Jane Doe', status: 'Pending' },
    ];
    
    const earningsData = [
        { month: 'August', earnings: 1200 },
        { month: 'September', earnings: 1800 },
        { month: 'October', earnings: 1500 },
        { month: 'November', earnings: 2100 },
        { month: 'December', earnings: 2500 },
    ];

    const chartConfig: ChartConfig = {
        earnings: {
          label: "Earnings",
          color: "hsl(var(--primary))",
        },
    };

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

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                                <Users className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">1,254</div>
                                <p className="text-xs text-muted-foreground">+50 since last week</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                                <ClipboardList className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{requests.filter(r => r.status === 'Pending').length}</div>
                                <p className="text-xs text-muted-foreground">WET & Mock Interview Requests</p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$7,600.00</div>
                                <p className="text-xs text-muted-foreground">+15.2% this month</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recent Registrations</CardTitle>
                                    <CardDescription>The latest students and HR professionals to join.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Name</TableHead>
                                                <TableHead>Role</TableHead>
                                                <TableHead>Registration Date</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {registrations.map(reg => (
                                                <TableRow key={reg.id}>
                                                    <TableCell className="font-medium">{reg.name}</TableCell>
                                                    <TableCell>{reg.role}</TableCell>
                                                    <TableCell>{reg.date}</TableCell>
                                                    <TableCell className="text-right">
                                                        <Button variant="outline" size="sm">View</Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader>
                                    <CardTitle>Monitor Requests</CardTitle>
                                    <CardDescription>Overview of all WET and mock interview requests.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Student</TableHead>
                                                <TableHead>Type</TableHead>
                                                <TableHead>Assigned HR</TableHead>
                                                <TableHead>Status</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {requests.map(req => (
                                                <TableRow key={req.id}>
                                                    <TableCell>{req.student}</TableCell>
                                                    <TableCell>{req.type}</TableCell>
                                                    <TableCell>{req.hr}</TableCell>
                                                    <TableCell>
                                                        <span className={`px-2 py-1 text-xs rounded-full ${req.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>{req.status}</span>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                         <div className="lg:col-span-1 space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Earnings & Analytics</CardTitle>
                                    <CardDescription>Monthly platform earnings.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ChartContainer config={chartConfig} className="h-[200px] w-full">
                                        <BarChart accessibilityLayer data={earningsData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
                                            <CartesianGrid vertical={false} />
                                            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
                                            <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                                            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                            <Bar dataKey="earnings" fill="var(--color-earnings)" radius={4} />
                                        </BarChart>
                                    </ChartContainer>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader>
                                    <CardTitle>Platform Management</CardTitle>
                                    <CardDescription>System-level settings and security.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                   <Button variant="outline" className="w-full justify-start gap-2">
                                        <Database className="w-4 h-4"/> Manage Database
                                   </Button>
                                    <Button variant="outline" className="w-full justify-start gap-2">
                                        <Shield className="w-4 h-4"/> Security Settings
                                   </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
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
