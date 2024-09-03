import './heading.css';
import { Socials } from '../overview/Socials'

export function Heading(): JSX.Element {
  return (
    <div className="heading">
        <span className='headingName'>Ricardo Locher <br/></span>
        <span className='softwareEngineer'>Web Developer<br/></span>
        <span className='littleInfo'>Linux user, Absolvent mehrerer <br/> Open Source Harvard Kurse</span>
        <Socials />
    </div>
  );
}