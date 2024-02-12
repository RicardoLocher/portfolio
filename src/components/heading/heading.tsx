import './heading.css';

export function Heading(): JSX.Element {
  return (
    <div className="heading">
        <span className='headingName'>Ricardo Locher <br/></span>
        <span className='softwareEngineer'>Software Engineer <br/></span>
        <span className='littleInfo'>Linux user, Absolvent mehrerer <br/> Open Source Harvard Kurse</span>
    </div>
  );
}