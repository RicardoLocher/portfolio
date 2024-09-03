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
          <Parallax style={{width: '100%', height: '100%', marginBottom: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} speed={-30}>
            <About />
            <Certificates />
            <TechStack />
            <Projects />
          </Parallax>
        </div>
    </div>
    )
}