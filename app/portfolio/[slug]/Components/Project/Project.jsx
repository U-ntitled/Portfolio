import React from 'react'
import './style.project.css'
import ProjectCard from './element/ProjectCard'
import { portfolioProject } from '@/data/portfolioProject'

function Project() {
  return (
    <div className='projects flex flex-row justify-center'>
      <div className="container flex flex-col space-y-12 gap-8 projects-container">

        <div className="project-header flex flex-col space-y-4">
          <h2 className="project-title">
            MY WORK
          </h2>
          <h3 className="project-subtitle">
            SOME OF MY PROJECTS 
          </h3>
          <div className="">
          <svg width="131" height="18" viewBox="0 0 131 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0059 10.5C17.2866 14.7566 13.5577 18 9.06564 18C4.05882 18 0 13.9706 0 9C0 4.02944 4.05882 0 9.06564 0C13.1987 0 16.6857 2.74572 17.7769 6.5H131V10.5H18.0059Z" fill="url(#paint0_linear_316_158)"/>
            <defs>
              <linearGradient id="paint0_linear_316_158" x1="10" y1="8.99999" x2="103.5" y2="18" gradientUnits="userSpaceOnUse">
                <stop stop-color="#C525EA"/>
                <stop offset="1" stop-color="#37BB8A"/>
              </linearGradient>
            </defs>
          </svg>
          </div>
        </div>
        <div className="project-cards grid grid-cols-2 justify-between gap-8">
          {
            portfolioProject.map((elem,key)=>(
              <ProjectCard key={key} image={elem.image} title={elem.title} githubLink={elem.githubLink} websiteLink={elem.websiteLink} description={elem.description}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project
