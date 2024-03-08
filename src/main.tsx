import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { Heading } from './components/heading/heading.tsx';
import { Overview } from './components/overview/overview.tsx';
import { About } from './components/about/about.tsx';
import { Certificates } from './components/certificates/Certificates.tsx';
import { TechStack } from './components/Tech Stack/TechStack.tsx';
import { Projects } from './components/Projects/Projects.tsx';
import { StarBackground } from './components/background/StarBackground.tsx';
import { CustomStarBackground } from './components/background/StarBackground2.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
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
              document.getElementById('aboutOverview')?.classList.add('highlighted');
              break;
            case 'certificates':
              document.getElementById('certificatesOverview')?.classList.add('highlighted');
              break;
            case 'techStack':
              document.getElementById('techStackOverview')?.classList.add('highlighted');
              break;
            case 'projects':
              document.getElementById('projectsOverview')?.classList.add('highlighted');
              break;
        }
      }
      else {
        switch (entry.target.id) {
            case 'about':
              document.getElementById('aboutOverview')?.classList.remove('highlighted');
              break;
            case 'certificates':
              document.getElementById('certificatesOverview')?.classList.remove('highlighted');
              break;
            case 'techStack':
              document.getElementById('techStackOverview')?.classList.remove('highlighted');
              break;
            case 'projects':
              document.getElementById('projectsOverview')?.classList.remove('highlighted');
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
          <About />
          <Certificates />
          <TechStack />
          <Projects />
        </div>
      </div>
    </div>
  )
}