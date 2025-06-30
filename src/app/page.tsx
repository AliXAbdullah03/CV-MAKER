import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MoveUpRight, Lightbulb, Eye, Edit, FileText, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <MoveUpRight className="h-6 w-6 text-primary" />
              <h1 className="font-headline text-2xl font-bold">CareerLeap</h1>
            </Link>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/builder">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <section className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
                  Build Your Dream Resume, Faster.
                </h1>
                <p className="text-lg text-muted-foreground">
                  CareerLeap helps you create professional, ATS-friendly resumes with AI-powered suggestions and a real-time preview. Land your next job with a resume that stands out.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link href="/builder">
                      Create My Resume Now
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#features">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Resume building interface"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                  data-ai-hint="resume builder"
                />
              </div>
            </div>
          </section>

          <section id="features" className="bg-secondary/50 py-16 sm:py-24 lg:py-32">
            <div className="container mx-auto px-4">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold font-headline sm:text-4xl">Why Choose CareerLeap?</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our platform is packed with features designed to make resume building a breeze and help you get hired.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="text-center">
                  <CardHeader>
                    <div className="bg-primary/10 text-primary p-3 rounded-md w-fit mb-4 mx-auto">
                      <Lightbulb className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline text-xl">AI Keyword Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Get intelligent keyword recommendations to tailor your resume for any job description and beat the bots.</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="bg-primary/10 text-primary p-3 rounded-md w-fit mb-4 mx-auto">
                      <Eye className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline text-xl">Live Resume Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">See your resume take shape in real-time. No more guessing how your final document will look.</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="bg-primary/10 text-primary p-3 rounded-md w-fit mb-4 mx-auto">
                      <Edit className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline text-xl">Intuitive Editor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">A simple and clean interface that makes editing your resume straightforward and hassle-free.</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <div className="bg-primary/10 text-primary p-3 rounded-md w-fit mb-4 mx-auto">
                      <FileText className="h-8 w-8" />
                    </div>
                    <CardTitle className="font-headline text-xl">ATS-Friendly Design</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Our templates are optimized for Applicant Tracking Systems to ensure your resume gets seen by recruiters.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 text-center bg-primary/10 rounded-lg py-16">
              <h2 className="text-3xl font-bold font-headline sm:text-4xl">Ready to Leap Into Your Career?</h2>
              <p className="mt-4 text-lg text-muted-foreground">Start building your professional resume today for free.</p>
              <div className="mt-8">
                  <Button size="lg" asChild>
                      <Link href="/builder">
                          Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                  </Button>
              </div>
            </div>
          </section>
        </main>

        <footer className="py-4 text-center text-sm text-muted-foreground border-t">
          © {new Date().getFullYear()} CareerLeap. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}
