'use client'
import Hero from '../Components/Hero/Hero'
import About from '../Components/NewABout/NewAbout'
import Service from '../Components/Service/Service'
import Project from '../Components/Project/Project'
import Team from '../Components/Team/Team'
import Transition from '../Components/Contact/Transition'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import CopyRight from '@/Components/Footer/CopyRight'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  let spies = []
  const ref = useRef(null)
  const [valueOfScroll, setValueOfScroll] = useState(true)
  const ratio = .6
  let observer = null
  const active = (elem)=>{
    const id = elem.getAttribute('id')
    const anchor = document.querySelector(`ul a[href="#${id}"]`)
    if(anchor === null){
      return
    }  
    anchor.parentElement.parentElement
    .querySelectorAll('.active')
    .forEach(node=>{
      console.log(node,9999111111)
      node.classList.remove('active')
    })
    
    anchor.classList.add('active')
  }
  
  const callback = (entries,observer)=>{
     entries.forEach(entry=>{
       if(entry.intersectionRatio > 0){
        active(entry.target)
       }
     })
  }
  const observe = (elems)=>{
    if(observer !== null){
      elems.forEach(elem=> observer.unobserve(elem))
    }
    const y = Math.round(window.innerHeight * ratio)
    observer = new IntersectionObserver(callback,{
      rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`
    })
    for(let i=0;i<elems.length;i++){
      observer.observe(elems[i])
    }
  }

  useEffect(()=>{
    if(ref.current){
      spies = Array.from(ref.current.querySelectorAll('[data-spy]'))
    }
    if(spies.length > 0){
      observe(spies)
      window.addEventListener('resize',()=>{
        observe(spies)
      })
    }
  },[valueOfScroll])
  const HandleScroll = ()=>{
    setValueOfScroll(ancien=>!ancien)
  }
  return (
    <div ref={ref} onScroll={HandleScroll} className='overflow-hidden  snap-mandatory scrollbar scrollbar-thumb-yellow-400 scrollbar-track-red-600 '>
      <header id='hero' className='snap-start' data-spy>
        <Hero/>
      </header>
      {/* <main> */}
        <section id='about' data-spy className='snap-center'>
          <About/>
        </section>
        <section id='service' data-spy className='snap-center'>
          <Service/>
        </section>
        <section id='project' data-spy className='snap-center'>
          <Project/>
        </section>
        <section id='team' data-spy className='snap-center'>
          <Team/>
        </section>
        <section id='transition' data-spy className='snap-center'>
          <Transition/>
        </section>
        <section id='contact' data-spy className='snap-center'>
          <Contact/>
        </section>
        <footer id='footer' data-spy className='snap-center'>
          <Footer/>
          <CopyRight/>
        </footer>
      {/* </main> */}
    </div>
  )
}
