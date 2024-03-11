// React Imports
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';

// Component imports
import { Heading } from './components/heading/heading.tsx';
import { Overview } from './components/overview/overview.tsx';
import { About } from './components/about/about.tsx';
import { Certificates } from './components/certificates/Certificates.tsx';
import { TechStack } from './components/Tech Stack/TechStack.tsx';
import { Projects } from './components/Projects/Projects.tsx';
import { StarBackground } from './components/background/StarBackground.tsx';
import { CustomStarBackground } from './components/background/StarBackground2.tsx';

// Style imports
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

// paralax imports
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
)

function App() {
  const [height, setHeight] = useState(0);
  const bodyRef = useRef(document.querySelector('.bodyContainer') as HTMLDivElement);


  // This useEffect is used to get the height of the bodyContainer wich
  // is used to set the height of the starBackground and customStarBackground
  // Needs to be executed when the last component is rendered
  useEffect(() => {
    window.onload = () => {
      if (bodyRef.current) {
        setHeight(bodyRef.current.offsetHeight);
        console.log(bodyRef.current.offsetHeight);
      }
    };
  }, []);
  
  // Intersection Observer with useEffect
  // This is used to highlight the overview section of the page when the user scrolls to the respective section
  // Gets executed when the last component is rendered
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry.target.id);
          switch (entry.target.id) {
              case 'about':
                document.getElementById('aboutDash')?.classList.add('dashHighlighted');
                break;
              case 'certificates':
                document.getElementById('certDash')?.classList.add('dashHighlighted');
                break;
              case 'techStack':
                document.getElementById('techStackDash')?.classList.add('dashHighlighted');
                break;
              case 'projects':
                document.getElementById('projectsDash')?.classList.add('dashHighlighted');
                break;
          }
        }
        else {
          switch (entry.target.id) {
              case 'about':
                document.getElementById('aboutDash')?.classList.remove('dashHighlighted');
                break;
              case 'certificates':
                document.getElementById('certDash')?.classList.remove('dashHighlighted');
                break;
              case 'techStack':
                document.getElementById('techStackDash')?.classList.remove('dashHighlighted');
                break;
              case 'projects':
                document.getElementById('projectsDash')?.classList.remove('dashHighlighted');
                break;
          }
        }
      });
    });
  
    const secs: any = document.querySelectorAll('.sec');
    
    secs.forEach((sec: Element) => {
      observer.observe(sec);
    });
  }, [<Projects />])

  return (
    <div className='bodyContainer' ref={bodyRef as any} id='bodyContainer'>
      <StarBackground height={height} />
      <CustomStarBackground height={height} count1={100} count2={100} />
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

          <Parallax translateY={[-5, 5]} style={{width: '100%', height: '100%', margin: '20px', marginTop: '100px'}} speed={-10}>
           <Projects />
          </Parallax>
        </div>
      </div>
    </div>
  )
}