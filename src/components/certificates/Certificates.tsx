import './certificates.css'
import CS50Certificate from '../../assets/CS50x.png';

export function Certificates() {
  return (
    <div className='certContainer'>
      <span className='certHeading'>Certificates<br/></span>
      <span className='certText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt cumque ab dolorem et adipisci nobis deleniti vero blanditiis. A, ducimus magnam amet fugit illo fuga porro quas. Suscipit, ut?</span>
      <a href='https://certificates.cs50.io/03639b6e-558d-4982-a8e3-93ff631f6ee0.pdf?size=A4' target='_blank' className='certLink'>
        <img src={CS50Certificate} alt="CS50 certificate" className='certPic'/>
      </a>
      <span className='certText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt cumque ab dolorem et adipisci nobis deleniti vero blanditiis. A, ducimus magnam amet fugit illo fuga porro quas. Suscipit, ut?</span>
      <a href='https://certificates.cs50.io/03639b6e-558d-4982-a8e3-93ff631f6ee0.pdf?size=A4' target='_blank' className='certLink'>
        <img src={CS50Certificate} alt="CS50 certificate" className='certPic'/>
      </a>
    </div>
  );
}