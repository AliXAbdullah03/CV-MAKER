import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MoveUpRight, ArrowRight, Star, FilePlus, Sparkles, Eye, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "AI Keyword Suggestions",
      description: "Get intelligent keyword recommendations to tailor your resume for any job description and beat the bots.",
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      title: "Live Resume Preview",
      description: "See your resume take shape in real-time. No more guessing how your final document will look.",
    },
    {
      icon: <FilePlus className="w-6 h-6 text-primary" />,
      title: "ATS-Friendly Templates",
      description: "Our templates are optimized for Applicant Tracking Systems to ensure your resume gets seen by recruiters.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Intuitive Editor",
      description: "A simple and clean interface that makes editing your resume straightforward and hassle-free.",
    },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Software Engineer",
      quote: "CareerLeap helped me land my dream job. The AI suggestions were a game-changer and made my resume stand out!",
      avatar: "https://placehold.co/100x100.png"
    },
    {
      name: "Samantha Lee",
      role: "UX Designer",
      quote: "The live preview feature is amazing. I could see exactly how my resume would look, which gave me so much confidence.",
      avatar: "https://placehold.co/100x100.png"
    },
    {
      name: "Michael Brown",
      role: "Product Manager",
      quote: "As a student transitioning into the workforce, CareerLeap was invaluable. It's so user-friendly and the results are professional.",
      avatar: "https://placehold.co/100x100.png"
    }
  ];

  const faqs = [
    {
      question: "Is CareerLeap free to use?",
      answer: "Yes, the core resume builder and ATS-friendly templates are completely free for everyone. We offer premium services like mock interviews and resume reviews for a fee."
    },
    {
      question: "How does the AI keyword suggestion work?",
      answer: "Our AI analyzes your resume content and compares it against patterns found in successful resumes for your target roles. It then suggests relevant keywords and phrases to increase your chances of passing through automated screening systems (ATS)."
    },
    {
      question: "Can I upload my existing resume?",
      answer: "Absolutely! You can upload your existing resume, and our tool will parse the information to pre-fill the editor, saving you time and effort."
    },
    {
      question: "Are the resume templates really ATS-friendly?",
      answer: "Yes. Our templates are designed with best practices for Applicant Tracking Systems in mind. They use clean, structured formatting that is easy for automated systems to read and parse correctly."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur-sm">
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
        <section className="container mx-auto px-4 py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl lg:text-6xl">
                The Smarter Way to Build Your Resume
              </h1>
              <p className="text-lg text-muted-foreground">
                Create a professional, ATS-friendly resume in minutes. CareerLeap's AI-powered tools help you stand out and get hired faster.
              </p>
              <Button size="lg" asChild>
                <Link href="/builder">
                  Create My Resume Now <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="User avatar" className="rounded-full border-2 border-background" />
                  <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="User avatar" className="rounded-full border-2 border-background" />
                  <Image src="https://placehold.co/40x40.png" width={40} height={40} alt="User avatar" className="rounded-full border-2 border-background" />
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />)}
                  </div>
                  <p className="text-muted-foreground">Loved by 10,000+ job seekers.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/600x450.png"
                alt="An example of a resume being edited in the CareerLeap application"
                width={600}
                height={450}
                className="rounded-lg shadow-2xl"
                data-ai-hint="resume editor interface"
              />
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 py-20 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-lg font-semibold text-muted-foreground">Trusted by professionals at top companies</h3>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-muted-foreground/60">
                <span className="font-bold text-xl">Company A</span>
                <span className="font-bold text-xl">Innovate Inc.</span>
                <span className="font-bold text-xl">Solutions Co</span>
                <span className="font-bold text-xl">TechCorp</span>
                <span className="font-bold text-xl">NextGen Ltd.</span>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 sm:py-24 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold font-headline sm:text-4xl">Why Choose CareerLeap?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our platform is packed with features designed to make resume building a breeze and help you get hired.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="bg-primary/10 text-primary p-3 rounded-md w-fit h-fit">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary/50 py-20 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold font-headline sm:text-4xl">Don't Just Take Our Word For It</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Hear from job seekers who have successfully advanced their careers with CareerLeap.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <Card key={i}>
                            <CardHeader>
                                <div className="flex items-center gap-4">
                                    <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="rounded-full" data-ai-hint="person face" />
                                    <div>
                                        <CardTitle className="text-base font-semibold">{testimonial.name}</CardTitle>
                                        <CardDescription>{testimonial.role}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">"{testimonial.quote}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 sm:py-24 lg:py-28">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold font-headline sm:text-4xl">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i + 1}`}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
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

      <footer className="py-8 text-center text-sm text-muted-foreground border-t">
        © {new Date().getFullYear()} CareerLeap. All Rights Reserved.
      </footer>
    </div>
  );
}
