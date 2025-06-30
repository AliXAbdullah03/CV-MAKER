import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  ArrowRight,
  Briefcase,
  CreditCard,
  FileText,
  History,
  MoveUpRight,
  Upload,
  UserCheck,
  Video,
} from 'lucide-react';

export default function DashboardPage() {
  const historyItems = [
    { type: 'WET Request', date: '2023-10-26', professional: 'John Smith', status: 'Completed' },
    { type: 'Mock Interview', date: '2023-10-20', professional: 'Jane Doe', status: 'Completed' },
  ];

  const hrProfessionals = [
    { name: 'John Smith', speciality: 'Tech Recruiting', experience: '10+ years' },
    { name: 'Jane Doe', speciality: 'Creative Industries', experience: '8 years' },
    { name: 'Peter Jones', speciality: 'Finance & Banking', experience: '15 years' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <MoveUpRight className="h-6 w-6 text-primary" />
            <h1 className="font-headline text-2xl font-bold">CareerLeap</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/builder">
                Resume Builder <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto p-4 md:p-8">
          <h2 className="text-3xl font-bold font-headline mb-6">Welcome to your Dashboard</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Resume Tools */}
              <Card>
                <CardHeader>
                  <CardTitle>Resume Tools</CardTitle>
                  <CardDescription>Build, upload, and optimize your resume for free.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/builder" className="block">
                    <Card className="h-full hover:bg-muted/50 transition-colors">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <FileText className="w-8 h-8 text-primary" />
                        <div>
                          <CardTitle className="text-lg">Resume Builder</CardTitle>
                          <CardDescription>Create a resume from scratch.</CardDescription>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                  <Card className="h-full hover:bg-muted/50 transition-colors cursor-pointer">
                     <label htmlFor="resume-upload" className="cursor-pointer block h-full w-full">
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Upload className="w-8 h-8 text-primary" />
                            <div>
                            <CardTitle className="text-lg">Upload for ATS Check</CardTitle>
                            <CardDescription>Parse an existing resume.</CardDescription>
                            </div>
                        </CardHeader>
                        <input id="resume-upload" type="file" className="sr-only" />
                     </label>
                  </Card>
                </CardContent>
              </Card>

              {/* Premium Services */}
              <Card>
                <CardHeader>
                  <CardTitle>Premium Services</CardTitle>
                  <CardDescription>Invest in your career with expert help. (Paid services)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* WET Request */}
                  <div>
                    <h3 className="font-semibold flex items-center gap-2 mb-2"><Briefcase className="w-5 h-5" /> Choose HR Professional for WET</h3>
                    <div className="space-y-3">
                      {hrProfessionals.map((pro, i) => (
                        <Card key={i} className="flex items-center justify-between p-4">
                          <div>
                            <p className="font-semibold">{pro.name}</p>
                            <p className="text-sm text-muted-foreground">{pro.speciality} - {pro.experience}</p>
                          </div>
                          <Button>Select & Pay <CreditCard className="ml-2" /></Button>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Mock Interviews */}
                  <div>
                     <h3 className="font-semibold mb-4">Request Mock Interview</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="p-4 flex flex-col items-start gap-3">
                           <div className="flex items-center gap-2">
                            <Video className="w-6 h-6 text-primary" />
                            <h4 className="font-semibold">Online Mock Interview</h4>
                           </div>
                           <p className="text-sm text-muted-foreground flex-1">Get a recorded session with AI-driven feedback.</p>
                           <Button className="w-full">Request & Pay <CreditCard className="ml-2" /></Button>
                        </Card>
                         <Card className="p-4 flex flex-col items-start gap-3">
                           <div className="flex items-center gap-2">
                            <UserCheck className="w-6 h-6 text-primary" />
                            <h4 className="font-semibold">Live Mock Interview</h4>
                           </div>
                           <p className="text-sm text-muted-foreground flex-1">Practice with a live HR professional for personalized coaching.</p>
                           <Button className="w-full">Request & Pay <CreditCard className="ml-2" /></Button>
                        </Card>
                     </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* History */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><History /> Activity History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {historyItems.length > 0 ? (
                    historyItems.map((item, i) => (
                      <div key={i} className="flex justify-between items-start text-sm">
                        <div>
                          <p className="font-medium">{item.type}</p>
                          <p className="text-muted-foreground">with {item.professional}</p>
                          <p className="text-xs text-muted-foreground">{item.date}</p>
                        </div>
                        <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">{item.status}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">No recent activity.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
       <footer className="py-8 text-center text-sm text-muted-foreground border-t bg-background">
        © {new Date().getFullYear()} CareerLeap. All Rights Reserved.
      </footer>
    </div>
  );
}
