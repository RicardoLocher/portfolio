import './overview.css'

export function Overview() {
  
  return(
    <div className='overview'>
      <ul className="OverviewList">
        <li id='aboutOverview' className='normal'>Über mich</li>
        <li id='certificatesOverview' className='normal'>Harvard Zertifikate</li>
        <li id='techStackOverview' className='normal'>Tech Stack</li>
        <li id='projectsOverview' className='normal'>Projekte</li>
      </ul>
    </div>
  )
}