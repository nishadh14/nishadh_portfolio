import { AnimatePresence } from 'framer-motion'
import { useCallback, useState } from 'react'
import { About } from './components/About'
import { Contact, Footer } from './components/Contact'
import { CustomCursor } from './components/CustomCursor'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'

export default function App() {
  const [loading, setLoading] = useState(true)
  const onDone = useCallback(() => setLoading(false), [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? <Loader key="loader" onDone={onDone} /> : null}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
