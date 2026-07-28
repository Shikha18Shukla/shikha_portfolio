import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { OpenSource } from '@/components/sections/OpenSource'
import { CodingProfiles } from '@/components/sections/CodingProfiles'
import { Certifications } from '@/components/sections/Certifications'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <CodingProfiles />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
