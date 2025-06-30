
"use client";

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { type ResumeData } from '@/lib/types';
import ResumeForm from '@/components/resume-form';
import ResumePreview from '@/components/resume-preview';
import KeywordSuggester from '@/components/keyword-suggester';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, LogOut, MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import AuthGuard from '@/components/auth-guard';
import { useAuth } from '@/contexts/auth-context';

const initialResumeData: ResumeData = {
  name: 'Jane Doe',
  email: 'jane.doe@email.com',
  phone: '123-456-7890',
  linkedin: 'linkedin.com/in/janedoe',
  summary: 'Innovative and results-driven professional with 5+ years of experience in software development and project management. Seeking to leverage expertise in agile methodologies and full-stack development to drive success in a challenging role.',
  experience: [
    {
      id: uuidv4(),
      jobTitle: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      startDate: '2021-01',
      endDate: 'Present',
      description: '- Led a team of 5 engineers in developing a scalable microservices architecture, improving system performance by 30%.\n- Developed and maintained critical features for a high-traffic e-commerce platform using React and Node.js.\n- Implemented CI/CD pipelines, reducing deployment time by 50%.',
    },
  ],
  education: [
    {
      id: uuidv4(),
      degree: 'B.S. in Computer Science',
      school: 'State University',
      startDate: '2013-09',
      endDate: '2017-05',
    },
  ],
  skills: ['React', 'Node.js', 'TypeScript', 'Project Management', 'Agile Methodologies', 'CI/CD'],
};

function BuilderContent() {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const { logout } = useAuth();
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <MoveUpRight className="h-6 w-6 text-primary" />
            <h1 className="font-headline text-2xl font-bold">CareerLeap</h1>
          </Link>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/dashboard">
                <LayoutDashboard className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto p-4 md:p-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-7">
            <div className="lg:col-span-3">
              <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
            </div>
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-8">
                <KeywordSuggester resumeData={resumeData} setResumeData={setResumeData} />
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} CareerLeap. All Rights Reserved.
      </footer>
    </div>
  );
}

export default function BuilderPage() {
  return (
    <AuthGuard allowedRoles={['student']}>
      <BuilderContent />
    </AuthGuard>
  )
}
