import { Heading } from './components/heading/heading.tsx';
import { Overview } from './components/overview/overview.tsx';
import { About } from './components/about/about.tsx';
import { Certificates } from './components/certificates/Certificates.tsx';
import { TechStack } from './components/Tech Stack/TechStack.tsx';
import { Parallax } from 'react-scroll-parallax';
import { Projects } from './components/Projects/Projects.tsx';

export function Home() {

  

  return (
  <div className='customRow'>
      <div className='hauptInfo'>
        <div className='stickyDiv'>
          <div className='centerer'>
            <Heading />
            <Overview />
          </div>
        </div>
      </div>
      
      <div className='infoContainer'>
        <Parallax className='parallaxContainer' speed={-10} >
          <About />
          <Certificates />
          <TechStack />
          <Projects />
        </Parallax>
      </div>
  </div>
  )
}

