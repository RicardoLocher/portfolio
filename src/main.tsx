import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBarTop from './components/navbar/navbar.tsx';
import { Heading } from './components/heading/heading.tsx';
import { Overview } from './components/overview/overview.tsx';
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
          <Heading />
          <Overview />
        </div>
      </div>
    </div>
  )
}