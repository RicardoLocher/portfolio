import './certificates.css'
import Accordion from 'react-bootstrap/Accordion';
import { cs50xText, cs50Web } from './texts';

export function Certificates() {
  return (
    <div className='certContainer'>
      <span className='certHeading'>Harvard Zertifikate<br/></span>
      <CertAccordion title='cs50x' text={cs50xText}/>
      <CertAccordion title='cs50Web' text={cs50Web}/>
    </div>
  );
}


function CertAccordion(props: {title: string, text: JSX.Element}) {
  return (
    <Accordion style={{margin: '10px'}} data-bs-theme="dark">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body style={{backgroundColor: '#212121', color: '#fff'}}>
          <span>{props.text}</span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}