'use server';

import { suggestKeywords, type SuggestKeywordsInput } from '@/ai/flows/suggest-keywords';
import { ResumeData } from './types';

function buildResumeContent(resumeData: ResumeData): string {
    const { name, email, phone, linkedin, summary, experience, education, skills } = resumeData;

    const experienceText = experience
        .map(exp => `Company: ${exp.company}\nTitle: ${exp.jobTitle}\nDescription: ${exp.description}`)
        .join('\n\n');
    
    const educationText = education
        .map(edu => `School: ${edu.school}\nDegree: ${edu.degree}`)
        .join('\n\n');

    return [
        `Name: ${name}`,
        `Contact: ${email}, ${phone}, ${linkedin}`,
        `Summary: \n${summary}`,
        `Experience: \n${experienceText}`,
        `Education: \n${educationText}`,
        `Skills: \n${skills.join(', ')}`
    ].join('\n\n');
}


export async function getKeywordSuggestions(resumeData: ResumeData) {
  try {
    const resumeContent = buildResumeContent(resumeData);
    const input: SuggestKeywordsInput = { resumeContent };
    const result = await suggestKeywords(input);
    return { success: true, keywords: result.keywords };
  } catch (error) {
    console.error('Error getting keyword suggestions:', error);
    return { success: false, error: 'Failed to get keyword suggestions.' };
  }
}
