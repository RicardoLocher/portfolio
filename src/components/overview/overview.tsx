import './overview.css'
import { Socials } from './Socials'

export function Overview() {
  
  return(
    <div className='overview'>
      <ul className="OverviewList">
        <li id='aboutOverview' className='normal'><Dash id='aboutDash' /><a onClick={() => window.scrollTo(0, 0)} className='inSiteLink'>Über mich</a></li>
        <li id='certificatesOverview' className='normal'><Dash id='certDash' /><a href='#certificates' className='inSiteLink'>Harvard Zertifikate</a></li>
        <li id='techStackOverview' className='normal'><Dash id='techStackDash' /><a href='#techStack' className='inSiteLink'>Tech Stack</a></li>
        <li id='projectsOverview' className='normal'><Dash id='projectsDash' /><a href='#projects' className='inSiteLink'>Projekte</a></li>
      </ul>
      <Socials />
    </div>
  )
}

function Dash(props: {id: string}):JSX.Element {
  return(
    <div className='dash' id={props.id}>
    </div>
  )
}