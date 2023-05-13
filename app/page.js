import Image from 'next/image'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import Service from '../Components/Service/Service'
import Project from '../Components/Project/Project'
import Team from '../Components/Team/Team'
import Transition from '../Components/Contact/Transition'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return (
    <>
      <header>
        <Hero/>
      </header>
      <main>
        <section>
          <About/>
        </section>
        <section>
          <Service/>
        </section>
        <section>
          <Project/>
        </section>
        <section>
          <Team/>
        </section>
        <section>
          <Transition/>
        </section>
        <section>
          <Contact/>
        </section>
        <footer>
          <Footer/>
        </footer>
      </main>
    </>
  )
}
