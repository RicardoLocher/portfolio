import './heading.css';
import { Socials } from '../overview/Socials'

export function Heading(): JSX.Element {
  return (
    <div className="heading">
        <span className='headingName'>Ricardo Locher <br/></span>
        <span className='softwareEngineer'>Software Developer<br/></span>
        <Socials />
    </div>
  );
}