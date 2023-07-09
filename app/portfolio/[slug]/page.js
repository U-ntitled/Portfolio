import Project from "./Components/Project/Project"
import Exxpertise from "./Components/Expertise/Exxpertise"
import Hero from "./Components/Hero/Hero"
import Skills from "./Components/skills/Skills"
import { teams  } from "./teams"
export default function Portofolio ({params}) {
    let info
    console.log("test test")
    teams.map(team => {
        if(team.name === params.slug){
            info = team
        }
    })
    return (
        <>
            <Hero/>
            <main className="">
                <section className="expertise">
                    <Exxpertise/>
                </section>
                <section className="portfolio">
                    <Project/>
                </section>
                <section className="skills">
                    <Skills/>
                </section>
                <section className="experience">
                    Experience section
                </section>
                <section className="contact">
                    contact section
                </section>
            </main>
            <footer>
                My footer
            </footer>
        </>
    )
        
}

export async function generateStaticParams() {

      return  teams.map(team => ({
           slug: team.name
      }))

}