"use client";

import type { ResumeData } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Briefcase, GraduationCap, Grip, Linkedin, Mail, Phone } from 'lucide-react';

interface ResumePreviewProps {
  resumeData: ResumeData;
}

export default function ResumePreview({ resumeData }: ResumePreviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Resume Preview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-[8.5/11] w-full bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg overflow-y-auto font-sans text-sm">
          <div className="text-center border-b pb-4 border-gray-300">
            <h2 className="text-3xl font-bold font-headline tracking-tight text-gray-800">{resumeData.name || "Your Name"}</h2>
            <div className="flex justify-center items-center gap-4 text-xs text-gray-600 mt-2">
                <span className="flex items-center gap-1.5"><Mail className="w-3 h-3"/> {resumeData.email}</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3 h-3"/> {resumeData.phone}</span>
                <span className="flex items-center gap-1.5"><Linkedin className="w-3 h-3"/> {resumeData.linkedin}</span>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary font-headline">Summary</h3>
            <Separator className="my-2 bg-gray-200" />
            <p className="text-gray-700">{resumeData.summary}</p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary font-headline flex items-center gap-2"><Briefcase className="w-4 h-4" />Experience</h3>
            <Separator className="my-2 bg-gray-200" />
            <div className="space-y-4">
              {resumeData.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-gray-800">{exp.jobTitle || "Job Title"}</h4>
                    <span className="text-xs font-medium text-gray-500">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-sm italic text-gray-600">{exp.company || "Company Name"}</p>
                  <ul className="mt-1 list-disc list-inside text-gray-700 space-y-1">
                    {exp.description.split('\n').map((line, i) => line && <li key={i}>{line.replace(/^- /, '')}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary font-headline flex items-center gap-2"><GraduationCap className="w-4 h-4" />Education</h3>
            <Separator className="my-2 bg-gray-200" />
             <div className="space-y-2">
              {resumeData.education.map(edu => (
                <div key={edu.id} className="flex justify-between items-baseline">
                  <div>
                    <h4 className="font-bold text-gray-800">{edu.degree || "Degree"}</h4>
                    <p className="text-sm italic text-gray-600">{edu.school || "School Name"}</p>
                  </div>
                  <span className="text-xs font-medium text-gray-500">{edu.startDate} - {edu.endDate}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary font-headline flex items-center gap-2"><Grip className="w-4 h-4" />Skills</h3>
            <Separator className="my-2 bg-gray-200" />
            <div className="flex flex-wrap gap-2">
                {resumeData.skills.map(skill => (
                    <span key={skill} className="bg-secondary text-secondary-foreground/80 rounded-md px-2 py-1 text-xs">{skill}</span>
                ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
