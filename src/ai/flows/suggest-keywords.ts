// src/ai/flows/suggest-keywords.ts
'use server';
/**
 * @fileOverview A flow that suggests relevant keywords based on the resume content.
 *
 * - suggestKeywords - A function that suggests keywords for a resume.
 * - SuggestKeywordsInput - The input type for the suggestKeywords function.
 * - SuggestKeywordsOutput - The return type for the suggestKeywords function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestKeywordsInputSchema = z.object({
  resumeContent: z.string().describe('The current content of the resume.'),
});
export type SuggestKeywordsInput = z.infer<typeof SuggestKeywordsInputSchema>;

const SuggestKeywordsOutputSchema = z.object({
  keywords: z.array(z.string()).describe('An array of suggested keywords.'),
});
export type SuggestKeywordsOutput = z.infer<typeof SuggestKeywordsOutputSchema>;

export async function suggestKeywords(input: SuggestKeywordsInput): Promise<SuggestKeywordsOutput> {
  return suggestKeywordsFlow(input);
}

const suggestKeywordsPrompt = ai.definePrompt({
  name: 'suggestKeywordsPrompt',
  input: {schema: SuggestKeywordsInputSchema},
  output: {schema: SuggestKeywordsOutputSchema},
  prompt: `You are an expert resume writer. Given the following resume content, suggest a list of keywords that would improve its match rate with job postings. Return the keywords as a JSON array.

Resume Content:
{{{resumeContent}}}`,
});

const suggestKeywordsFlow = ai.defineFlow(
  {
    name: 'suggestKeywordsFlow',
    inputSchema: SuggestKeywordsInputSchema,
    outputSchema: SuggestKeywordsOutputSchema,
  },
  async input => {
    const {output} = await suggestKeywordsPrompt(input);
    return output!;
  }
);
