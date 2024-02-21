import './heading.css';

export function Heading(): JSX.Element {
  return (
    <div className="heading">
        <span className='headingName'>Ricardo Locher <br/></span>
        <span className='softwareEngineer'>Web Developer<br/></span>
        <span className='littleInfo'>Linux user, Absolvent mehrerer <br/> Open Source Harvard Kurse</span>
    </div>
  );
}