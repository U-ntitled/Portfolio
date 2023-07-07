import Hero from "./Components/Hero/Hero"
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
            <main className="main-content">
                <section className="expertise">
                    <div className="expertise-left">

                    </div>
                    <div className="expertise-right">

                    </div>
                </section>
                <section className="portfolio">
                    My portfolio section
                </section>
                <section className="skills">
                    Skills section wella
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