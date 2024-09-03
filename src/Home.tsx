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
            <Heading />
            <Overview />
          </div>
        </div>
        
        <div className='infoContainer'>
          <Parallax translateY={[-20, 20]} style={{width: '100%', height: '100%', marginBottom: '100px'}} speed={-10}>
            <About />
          </Parallax>
          
          <Parallax translateY={[-10, 10]} style={{width: '100%', height: '100%', margin: '20px'}} speed={-10}>
            <Certificates />
          </Parallax>

          <Parallax translateY={[-5, 5]} style={{width: '100%', height: '100%', margin: '20px', marginBottom: '200px'}} speed={-100}>
            <TechStack />
          </Parallax>

          <Parallax translateY={[-5, 5]} style={{width: '100%', height: '100%', margin: '20px', marginTop: '100px',display: 'flex', justifyContent: 'center', alignItems: 'center'}} speed={-10}>
           <Projects />
          </Parallax>
        </div>
    </div>
    )
}