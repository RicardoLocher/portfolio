import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Heading } from './components/heading/heading.tsx';
import { Overview } from './components/overview/overview.tsx';
import { About } from './components/about/about.tsx';
import { Certificates } from './components/certificates/Certificates.tsx';
import { TechStack } from './components/Tech Stack/TechStack.tsx';
import { Projects } from './components/Projects/Projects.tsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function App() {
  
  // Intersection Observer with useEffect
  // This is used to highlight the overview section of the page when the user scrolls to the respective section
  // Gets executed when the last component is rendered
  useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
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
  })

  const secs: any = document.querySelectorAll('.sec');
  
  secs.forEach((sec: Element) => {
    observer.observe(sec);
  });
}, [<Projects />])

  return (
    <div className='bodyContainer'>
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