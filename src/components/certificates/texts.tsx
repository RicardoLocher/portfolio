import CS50Certificate from '../../assets/CS50x.png';
import CS50WCertificate from '../../assets/CS50W-Certificate.png';

export const cs50xText : JSX.Element = (
        <>
        <p>CS50x, oder "Introduction to Computer Science," ist ein Online-Kurs, der von der Harvard University bereitgestellt wird und eine umfassende Einführung in die Grundlagen der Informatik bietet. Der Kurs richtet sich sowohl an Anfänger als auch an Personen mit geringen Vorkenntnissen in der Programmierung.</p>
        
        <p>Die Teilnehmer erwerben grundlegende Fachkenntnisse in verschiedenen Bereichen der Informatik, beginnend mit den grundlegenden Konzepten der Computerwissenschaft. Ein Schwerpunkt liegt auf der Programmierung in der Sprache C, was den Studierenden eine solide Grundlage für das Verständnis von Programmierkonzepten und -techniken vermittelt.</p>
        
        <p>Im Verlauf des Kurses werden fortgeschrittenere Themen behandelt, darunter Datenstrukturen, Algorithmen und Webentwicklung. Die Teilnehmer haben Zugang zu Vorlesungsvideos, Vortragsmaterialien und praktischen Programmieraufgaben, die ihre Fähigkeiten und Kenntnisse vertiefen.</p>
        
        <p>Die Schüler haben die Möglichkeit, den Kurs kostenlos zu absolvieren oder eine kostenpflichtige Zertifizierung zu erwerben. Durch die Teilnahme an CS50x erhalten die Studierenden nicht nur eine Einführung in die Welt der Informatik, sondern entwickeln auch praktische Programmierfähigkeiten, die auf verschiedenen Plattformen und in unterschiedlichen Anwendungsgebieten anwendbar sind.</p>
        
        <h5>Mein Zertifikat:</h5>
        <a href='https://certificates.cs50.io/03639b6e-558d-4982-a8e3-93ff631f6ee0.pdf?size=A4' target='_blank' className='certLink'>
            <img src={CS50Certificate} alt="CS50 certificate" className='certPic'/>
        </a>
        </>
    )

export const cs50Web : JSX.Element = (
    <>
        <p>Der CS50 Web Programming-Kurs mit Python und JavaScript ist ein Online-Kurs der Harvard University, der sich auf fortgeschrittene Themen der Webentwicklung konzentriert. Dieser Kurs baut auf den Grundlagen aus CS50x auf und vertieft das Verständnis der Studierenden für die Entwicklung von Webanwendungen.</p>

        <p>Die Studierenden erwerben Fachkenntnisse in der Verwendung von Python und JavaScript, zwei weit verbreiteten Programmiersprachen in der Webentwicklung. Der Kurs deckt wichtige Konzepte wie Front-End-Entwicklung, Back-End-Entwicklung, Datenbanken, Benutzerauthentifizierung und Sicherheit ab.</p>

        <p>Ein Schwerpunkt liegt auf der Anwendung von Programmierkenntnissen zur Erstellung dynamischer und interaktiver Websites. Die Studierenden lernen, wie man mit Webframeworks wie Django (für Python) und Node.js (für JavaScript) arbeitet. Darüber hinaus beschäftigt sich der Kurs mit Testbasierter Entwicklung, der Integration von Datenbanken und CI/CD Konzepten wie Github Workflows.</p>

        <p>Die Teilnehmer haben Zugriff auf Vorlesungsmaterialien, praktische Programmieraufgaben und Projekte, die es ihnen ermöglichen, ihre Fähigkeiten in der Praxis anzuwenden. Der Kurs fördert auch die kreative Anwendung von Webtechnologien, damit die Studierenden eigene Projekte entwickeln können.</p>

        <p>Ähnlich wie bei CS50x haben die Teilnehmer die Option, den Kurs kostenlos zu absolvieren oder eine kostenpflichtige Zertifizierung zu erwerben. Durch die Teilnahme an CS50 Web Programming erlangen die Studierenden spezifische Fachkenntnisse in fortgeschrittener Webentwicklung und sind in der Lage, komplexe Webanwendungen zu erstellen und zu verstehen.</p>
        
        <h5>Mein Zertifikat:</h5>
        <a href='https://certificates.cs50.io/5035a690-fd04-4ac6-8273-0f450527ccb1.pdf?size=A4' target='_blank' className='certLink'>
            <img src={CS50WCertificate} alt="CS50 certificate" className='certPic'/>
        </a>
    </>
)