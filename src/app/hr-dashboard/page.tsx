"use client";

import * as React from 'react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Bell,
  ClipboardList,
  Clock,
  CircleDollarSign,
  LogOut,
  MoveUpRight,
  Settings,
  User,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function HRDashboardPage() {
  const requests = [
    { id: 1, type: 'WET Request', student: 'Alex Johnson', date: '2023-11-05', status: 'Pending' },
    { id: 2, type: 'Live Mock Interview', student: 'Maria Garcia', date: '2023-11-08', status: 'Pending' },
  ];

  const upcomingSessions = [
    { id: 1, type: 'WET Review', student: 'Sam Wilson', time: 'Tomorrow at 2:00 PM' },
    { id: 2, type: 'Live Mock Interview', student: 'Chloe Brown', time: 'Nov 7, 2023 at 10:00 AM' },
  ];

  const earningsData = {
    balance: '450.00',
    transactions: [
      { id: 1, date: '2023-10-28', type: 'WET Review', amount: '+ $50.00' },
      { id: 2, date: '2023-10-25', type: 'Live Mock Interview', amount: '+ $75.00' },
      { id: 3, date: '2023-10-22', type: 'Withdrawal', amount: '- $100.00' },
    ],
  };

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <MoveUpRight className="h-6 w-6 text-primary" />
            <h1 className="font-headline text-2xl font-bold">CareerLeap</h1>
            <span className="text-sm font-medium text-muted-foreground ml-2 border-l pl-4">HR Portal</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="HR Professional" data-ai-hint="person face" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Jane Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">jane.doe@hr.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User className="mr-2" /> Profile</DropdownMenuItem>
                <DropdownMenuItem><Settings className="mr-2" /> Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><LogOut className="mr-2" /> Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-8">
        <div className="container mx-auto">
           <h2 className="text-3xl font-bold font-headline mb-6">HR Professional Dashboard</h2>
           <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-6">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="requests">Requests</TabsTrigger>
                <TabsTrigger value="availability">Availability</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="earnings">Earnings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dashboard">
                 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
                            <ClipboardList className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{requests.length}</div>
                            <p className="text-xs text-muted-foreground">New WET and Mock Interview requests</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Upcoming Sessions</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{upcomingSessions.length}</div>
                            <p className="text-xs text-muted-foreground">Confirmed sessions in the next 7 days</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
                            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${earningsData.balance}</div>
                            <p className="text-xs text-muted-foreground">Ready for withdrawal</p>
                        </CardContent>
                    </Card>
                 </div>
                 <div className="mt-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Upcoming Sessions</CardTitle>
                      </CardHeader>
                      <CardContent>
                         <Table>
                           <TableHeader>
                            <TableRow>
                                <TableHead>Type</TableHead>
                                <TableHead>Student</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                           </TableHeader>
                           <TableBody>
                            {upcomingSessions.map(session => (
                               <TableRow key={session.id}>
                                <TableCell>{session.type}</TableCell>
                                <TableCell>{session.student}</TableCell>
                                <TableCell>{session.time}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="outline" size="sm">View Details</Button>
                                </TableCell>
                               </TableRow>
                            ))}
                           </TableBody>
                         </Table>
                      </CardContent>
                    </Card>
                 </div>
              </TabsContent>

              <TabsContent value="requests">
                <Card>
                  <CardHeader>
                    <CardTitle>Accept/Reject Requests</CardTitle>
                    <CardDescription>Review new requests for WET and mock interviews. You can provide comments and suggestions after accepting.</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <Table>
                       <TableHeader>
                         <TableRow>
                            <TableHead>Type</TableHead>
                            <TableHead>Student Name</TableHead>
                            <TableHead>Request Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                         </TableRow>
                       </TableHeader>
                       <TableBody>
                         {requests.map(req => (
                           <TableRow key={req.id}>
                            <TableCell className="font-medium">{req.type}</TableCell>
                            <TableCell>{req.student}</TableCell>
                            <TableCell>{req.date}</TableCell>
                            <TableCell className="text-right space-x-2">
                                <Button variant="outline">View Details</Button>
                                <Button>Accept</Button>
                                <Button variant="destructive">Reject</Button>
                            </TableCell>
                           </TableRow>
                         ))}
                       </TableBody>
                     </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="availability">
                <Card>
                  <CardHeader>
                    <CardTitle>Set Your Availability</CardTitle>
                    <CardDescription>Select dates and times you are available for sessions.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="font-medium">Available slots for {date ? date.toLocaleDateString() : 'selected date'}</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                               <Input type="time" defaultValue="09:00" />
                               <span>-</span>
                               <Input type="time" defaultValue="17:00" />
                               <Button variant="outline">Add Slot</Button>
                            </div>
                            <p className="text-sm text-muted-foreground">Your existing slots for this day will appear here.</p>
                            <div className="flex flex-wrap gap-2 pt-2">
                                <div className="flex items-center justify-between rounded-md border px-3 py-2 text-sm w-full">
                                    <span>10:00 AM - 11:00 AM</span>
                                    <Button variant="ghost" size="sm">Remove</Button>
                                </div>
                                <div className="flex items-center justify-between rounded-md border px-3 py-2 text-sm w-full">
                                    <span>2:00 PM - 3:00 PM</span>
                                    <Button variant="ghost" size="sm">Remove</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile">
                <Card>
                    <CardHeader>
                        <CardTitle>Profile Management</CardTitle>
                        <CardDescription>Keep your professional profile up to date.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center gap-4">
                             <Avatar className="h-20 w-20">
                                <AvatarImage src="https://placehold.co/100x100.png" alt="HR Professional" data-ai-hint="person face" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <Button variant="outline">Change Photo</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" defaultValue="Jane Doe" />
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="title">Title / Speciality</Label>
                                <Input id="title" defaultValue="Tech Recruiter" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bio">Biography</Label>
                            <Textarea id="bio" rows={5} defaultValue="10+ years of experience in recruiting for top-tier tech companies. Passionate about helping candidates land their dream jobs." />
                        </div>
                        <Button>Save Changes</Button>
                    </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="earnings">
                <Card>
                    <CardHeader>
                        <CardTitle>Earnings & Payouts</CardTitle>
                        <CardDescription>View your balance and transaction history.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           <Card className="bg-primary/10">
                            <CardHeader>
                                <CardTitle className="text-lg">Available Balance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-4xl font-bold">${earningsData.balance}</p>
                                <Button className="mt-4 w-full">Withdraw Balance</Button>
                            </CardContent>
                           </Card>
                           <div className="md:col-span-2">
                             <h4 className="font-semibold">Payout Settings</h4>
                             <p className="text-muted-foreground text-sm mt-2">Your payouts are sent to the bank account ending in **** 1234.</p>
                             <Button variant="link" className="px-0">Manage Payout Method</Button>
                           </div>
                        </div>
                         <div>
                            <h3 className="font-semibold text-lg mb-4">Transaction History</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {earningsData.transactions.map((tx) => (
                                    <TableRow key={tx.id}>
                                        <TableCell>{tx.date}</TableCell>
                                        <TableCell>{tx.type}</TableCell>
                                        <TableCell className={`text-right font-medium ${tx.amount.startsWith('+') ? 'text-green-600' : ''}`}>{tx.amount}</TableCell>
                                    </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                         </div>
                    </CardContent>
                </Card>
              </TabsContent>
           </Tabs>
        </div>
      </main>
    </div>
  );
}
