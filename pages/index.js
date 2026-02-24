// pages/index.js
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Head>
        <title>Filip Marinca | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer specializing in React, Next.js, and modern web technologies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
