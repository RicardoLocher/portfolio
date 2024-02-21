import './TechStack.css'
import './animations.css'

export function TechStack() {
    return (
        <>
            <div className='techStackContainer'>
            <span className='techStackHeading'>Tech Stack</span>
                    <span className='techStackHeading1'>Languages</span>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/typescript.png' title='TypeScript' text='TypeScript ist eine Programmiersprache, die auf JavaScript aufbaut und statische Typisierung sowie zusätzliche Features zur Verbesserung der Code-Qualität und Entwicklerproduktivität bietet.'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/javascript.png' title='JavaScript' text='JavaScript ist eine weitverbreitete, interpretierte Programmiersprache, die hauptsächlich für die Entwicklung von interaktiven Webseiten verwendet wird.'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/html-5.png' title='HTML' text='HTML wird für die Strukturierung von Inhalten in Webseiten verwendet, um Text, Medien und andere Ressourcen zu definieren und zu organisieren.'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/css3.png' title='CSS' text='CSS (Cascading Style Sheets) ist eine Stylesheet-Sprache, die verwendet wird, um das Aussehen und Layout von HTML-Dokumenten zu definieren und zu gestalten.'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/python.png' title='Python' text='Python ist eine High-Level Programmiersprache, die sich durch klare Syntax, hohe Lesbarkeit und umfangreiche Bibliotheken auszeichnet und für Anfänger sowie erfahrene Entwickler geeignet ist.'/>
                    <TechStackItem title='SQL' icon='https://img.icons8.com/color/48/000000/sql.png' text='SQL (Structured Query Language) ist eine spezielle Programmiersprache, die zur Verwaltung und Abfrage von relationalen Datenbanken verwendet wird.'/>
                    <TechStackItem title='C' icon='https://img.icons8.com/color/48/000000/c-programming.png' text='C ist eine Low-Level Programmiersprache mit einer klaren Syntax, die sich durch eine hohe Leistung und direkte Hardwarezugriffe auszeichnet und die Basis für viele andere Programmiersprachen bildet.'/>
                    <span className='techStackHeading1'>Frameworks</span>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/react-native.png' title='React' text='React ist eine JavaScript-Bibliothek, die für die Entwicklung von benutzerfreundlichen und reaktionsfähigen Benutzeroberflächen in Webanwendungen verwendet wird.'/>
                    <TechStackItem title='React Native' icon='https://img.icons8.com/color/48/000000/react-native.png' text='React Native ist ein Open-Source-Framework, das es Entwicklern ermöglicht, plattformübergreifende mobile Anwendungen mit JavaScript und React zu erstellen, wobei sie native UI-Komponenten nutzen können.'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/nodejs.png' title='Node.js' text='Node.js ist eine serverseitige JavaScript-Plattform, die die Ausführung von JavaScript außerhalb des Browsers ermöglicht und es Entwicklern erlaubt, skalierbare Anwendungen in vielen Bereichen zu erstellen.'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/django.png' title='Django' text='Django ist ein hochgradig skalierbares, open-source Web-Framework für die schnelle Entwicklung von sicheren und datenbankgestützten Python-Webanwendungen.'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/bootstrap.png' title='Bootstrap' text='Bootstrap ist ein beliebtes Open-Source-Framework für Frontend-Webentwicklung, das verwendet wird, um die Erstellung responsiver und ästhetisch ansprechender Websites zu erleichtern.'/>
                    <TechStackItem title='Flask' icon='https://img.icons8.com/color/48/000000/flask.png' text='Flask ist ein leichtgewichtiges, Python-basiertes Web-Framework, das flexibel und einfach zu verwenden ist, um Webanwendungen zu entwickeln.'/>
                <p>icons by <a href='https://icons8.com/' target='_blank'>icons8</a></p>
            </div>
        </>
        )
}

function TechStackItem(props: {icon: string, title: string, text: string}) {
    return (
        <div className='myCard'>
            <div className='innerCard'>
                <div className='frontSide'>
                    <img src={props.icon} alt='icon' />
                    <p className='title'>{props.title}</p>
                </div>
                <div className='backSide'>
                    <p className='text'>{props.text}</p>
                </div>
            </div>
        </div>
    )
}