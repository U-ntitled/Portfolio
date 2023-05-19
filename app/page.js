import Image from 'next/image'
import Hero from '../Components/Hero/Hero'
import About from '../Components/ABout/About'
import Service from '../Components/Service/Service'
import Project from '../Components/Project/Project'
import Team from '../Components/Team/Team'
import Transition from '../Components/Contact/Transition'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import CopyRight from '@/Components/Footer/CopyRight'

export default function Home() {
  return (
    <div className='overflow-hidden scroll-smooth'>
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
          <CopyRight/>
        </footer>
      </main>
    </div>
  )
}
