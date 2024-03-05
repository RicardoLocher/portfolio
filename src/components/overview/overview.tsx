import './overview.css'

export function Overview() {
  
  return(
    <div className='overview'>
      <ul className="OverviewList">
      <li id='aboutOverview' className='normal'><a href='#about' className='inSiteLink'>Über mich</a></li>
      <li id='certificatesOverview' className='normal'><a href='#certificates' className='inSiteLink'>Harvard Zertifikate</a></li>
      <li id='techStackOverview' className='normal'><a href='#techStack' className='inSiteLink'>Tech Stack</a></li>
      <li id='projectsOverview' className='normal'><a href='#projects' className='inSiteLink'>Projekte</a></li>
    </ul>
    </div>
  )
}