"use client";

import type { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { ResumeData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Briefcase, GraduationCap, Info, PlusCircle, Trash2, User, X } from 'lucide-react';

interface ResumeFormProps {
  resumeData: ResumeData;
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
}

const InfoTooltip = ({ content }: { content: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <button type="button" className="text-muted-foreground hover:text-foreground">
          <Info className="h-4 w-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="max-w-xs">{content}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function ResumeForm({ resumeData, setResumeData }: ResumeFormProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNestedChange = (section: 'experience' | 'education', index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) => i === index ? { ...item, [name]: value } : item),
    }));
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: uuidv4(), jobTitle: '', company: '', startDate: '', endDate: '', description: '' }],
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(item => item.id !== id),
    }));
  };
  
  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { id: uuidv4(), degree: '', school: '', startDate: '', endDate: '' }],
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(item => item.id !== id),
    }));
  };

  const removeSkill = (skillToRemove: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }))
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2"><User />Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" value={resumeData.name} onChange={handleChange} placeholder="e.g., Jane Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" value={resumeData.email} onChange={handleChange} placeholder="e.g., jane.doe@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" value={resumeData.phone} onChange={handleChange} placeholder="e.g., 123-456-7890" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn Profile</Label>
            <Input id="linkedin" name="linkedin" value={resumeData.linkedin} onChange={handleChange} placeholder="e.g., linkedin.com/in/janedoe" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Professional Summary</CardTitle>
          <CardDescription>
            Write a brief summary of your career objectives and qualifications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea name="summary" value={resumeData.summary} onChange={handleChange} rows={5} placeholder="e.g., Motivated software engineer with 5 years of experience..." />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2"><Briefcase />Work Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={exp.id} className="space-y-4 rounded-lg border p-4 relative">
              <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7 text-muted-foreground hover:bg-destructive/10 hover:text-destructive" onClick={() => removeExperience(exp.id)}><Trash2 className="h-4 w-4"/></Button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`jobTitle-${index}`}>Job Title</Label>
                  <Input id={`jobTitle-${index}`} name="jobTitle" value={exp.jobTitle} onChange={e => handleNestedChange('experience', index, e)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`company-${index}`}>Company</Label>
                  <Input id={`company-${index}`} name="company" value={exp.company} onChange={e => handleNestedChange('experience', index, e)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`startDate-exp-${index}`}>Start Date</Label>
                  <Input id={`startDate-exp-${index}`} name="startDate" type="month" value={exp.startDate} onChange={e => handleNestedChange('experience', index, e)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`endDate-exp-${index}`}>End Date</Label>
                  <Input id={`endDate-exp-${index}`} name="endDate" type="month" value={exp.endDate} onChange={e => handleNestedChange('experience', index, e)} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor={`description-${index}`} className="flex items-center gap-2">
                  Description
                  <InfoTooltip content="Start each point with an action verb. Quantify your achievements with numbers where possible." />
                </Label>
                <Textarea id={`description-${index}`} name="description" value={exp.description} onChange={e => handleNestedChange('experience', index, e)} rows={4} placeholder="e.g., - Led a team of 5 engineers..." />
              </div>
            </div>
          ))}
          <Button variant="outline" onClick={addExperience}><PlusCircle className="mr-2" />Add Experience</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline flex items-center gap-2"><GraduationCap />Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {resumeData.education.map((edu, index) => (
            <div key={edu.id} className="space-y-4 rounded-lg border p-4 relative">
              <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-7 w-7 text-muted-foreground hover:bg-destructive/10 hover:text-destructive" onClick={() => removeEducation(edu.id)}><Trash2 className="h-4 w-4"/></Button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                  <Label htmlFor={`degree-${index}`}>Degree</Label>
                  <Input id={`degree-${index}`} name="degree" value={edu.degree} onChange={e => handleNestedChange('education', index, e)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`school-${index}`}>School/University</Label>
                  <Input id={`school-${index}`} name="school" value={edu.school} onChange={e => handleNestedChange('education', index, e)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`startDate-edu-${index}`}>Start Date</Label>
                  <Input id={`startDate-edu-${index}`} name="startDate" type="month" value={edu.startDate} onChange={e => handleNestedChange('education', index, e)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`endDate-edu-${index}`}>End Date</Label>
                  <Input id={`endDate-edu-${index}`} name="endDate" type="month" value={edu.endDate} onChange={e => handleNestedChange('education', index, e)} />
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" onClick={addEducation}><PlusCircle className="mr-2" />Add Education</Button>
        </CardContent>
      </Card>
      
       <Card>
        <CardHeader>
          <CardTitle className="font-headline">Skills</CardTitle>
          <CardDescription>
            List your relevant skills. Add new skills by pressing Enter.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {resumeData.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-base py-1 pl-3 pr-2">
                {skill}
                <button onClick={() => removeSkill(skill)} className="ml-2 rounded-full hover:bg-muted-foreground/20 p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
          <Input 
            placeholder="Add a skill and press Enter"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                const newSkill = e.currentTarget.value.trim();
                if (newSkill && !resumeData.skills.includes(newSkill)) {
                  setResumeData(prev => ({...prev, skills: [...prev.skills, newSkill]}));
                  e.currentTarget.value = '';
                }
              }
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
