import './certificates.css'
import Accordion from 'react-bootstrap/Accordion';
import { cs50xText, cs50Web } from './texts';

export function Certificates() {
  return (
    <div className='certContainer'>
      <span className='certHeading'>Harvard Zertifikate<br/></span>
      <Accordion style={{margin: '10px', marginBottom: '200px'}} data-bs-theme="dark" defaultActiveKey="0" className='sec' id='certificates'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>cs50x</Accordion.Header>
        <Accordion.Body style={{backgroundColor: '#212121', color: '#fff'}}>
          <span className='certText'>{cs50xText}</span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>cs50 Web</Accordion.Header>
        <Accordion.Body style={{backgroundColor: '#212121', color: '#fff'}}>
          <span className='certText'>{cs50Web}</span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}