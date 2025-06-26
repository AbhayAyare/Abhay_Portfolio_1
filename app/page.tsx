import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';

export default function Home() {
  return (
    <>
      <Head>
        <title>MySite | Home</title>
        <meta name="description" content="Next.js + Tailwind CSS Landing Page" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
