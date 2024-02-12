import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBarTop from './components/navbar/navbar.tsx';
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
  return (
    <div className='bodyContainer'>
      <NavBarTop /> 
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