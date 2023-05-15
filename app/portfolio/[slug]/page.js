<<<<<<< HEAD
// import { teams  } from "./teams"
// export default function Portofolio ({params}) {
//     let info
//     console.log("test test")
//     teams.map(team => {
//         if(team.name === params.slug){
//             info = team
//         }
//     })
//     return (
//         <>
//         <h1>djfjksdhkfhkqshdfkhqkhfkqsjh {info.fname}</h1>
//        </>
//     )
        
// }

// export async function generateStaticParams() {

//       return  teams.map(team => ({
//            slug: team.name
//       }))

// }
=======
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
        <h1>djfjksdhkfhkqshdfkhqkhfkqsjh {info.fname}</h1>
       </>
    )
        
}

export async function generateStaticParams() {

      return  teams.map(team => ({
           slug: team.name
      }))

}
>>>>>>> a5c83223b2912b96bcaa9826a40a8c96ac50518b
