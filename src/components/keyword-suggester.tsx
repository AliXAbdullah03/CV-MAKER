"use client";

import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useToast } from '@/hooks/use-toast';
import { getKeywordSuggestions } from '@/lib/actions';
import type { ResumeData } from '@/lib/types';
import { Lightbulb, Loader2, Plus } from 'lucide-react';

interface KeywordSuggesterProps {
  resumeData: ResumeData;
  setResumeData: Dispatch<SetStateAction<ResumeData>>;
}

export default function KeywordSuggester({ resumeData, setResumeData }: KeywordSuggesterProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSuggestKeywords = async () => {
    setIsLoading(true);
    setSuggestions([]);
    const result = await getKeywordSuggestions(resumeData);
    setIsLoading(false);

    if (result.success && result.keywords) {
      // Filter out keywords already present in the resume
      const newKeywords = result.keywords.filter(k => 
        !resumeData.skills.some(s => s.toLowerCase() === k.toLowerCase())
      );
      setSuggestions(newKeywords);
      if (newKeywords.length === 0 && result.keywords.length > 0) {
        toast({ title: "Keywords up to date!", description: "Your skills already include all suggestions." });
      }
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'Could not fetch keyword suggestions.',
      });
    }
  };

  const handleAddKeyword = (keyword: string) => {
    if (!resumeData.skills.includes(keyword)) {
      setResumeData(prev => ({ ...prev, skills: [...prev.skills, keyword] }));
      setSuggestions(prev => prev.filter(s => s !== keyword));
      toast({
          title: "Skill Added",
          description: `"${keyword}" has been added to your skills.`,
      })
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2"><Lightbulb/> AI Keyword Suggester</CardTitle>
        <CardDescription>Get AI-powered suggestions to improve your resume's visibility.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={handleSuggestKeywords} disabled={isLoading} className="w-full">
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
          {isLoading ? 'Analyzing...' : 'Suggest Keywords'}
        </Button>
        {(isLoading || suggestions.length > 0) && (
          <div className="space-y-2 pt-4">
            <h4 className="font-medium text-sm">Suggestions:</h4>
            {isLoading && !suggestions.length ? (
                <div className="space-y-2">
                    <div className="h-8 w-full animate-pulse rounded-md bg-muted/50"></div>
                    <div className="h-8 w-2/3 animate-pulse rounded-md bg-muted/50"></div>
                    <div className="h-8 w-5/6 animate-pulse rounded-md bg-muted/50"></div>
                </div>
            ) : (
                <div className="flex flex-wrap gap-2">
                {suggestions.map(keyword => (
                    <Badge key={keyword} variant="outline" className="text-sm py-1 px-2 cursor-pointer hover:bg-accent/50" onClick={() => handleAddKeyword(keyword)}>
                        <Plus className="h-3 w-3 mr-1"/>
                        {keyword}
                    </Badge>
                ))}
                </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
