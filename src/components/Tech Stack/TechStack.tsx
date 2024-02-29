import './TechStack.css'
import './animations.css'
import { Cube } from './Cube.tsx'

import Typescript from '../../assets/Typescript.png'
import JavaScript from '../../assets/JavaScript.png'
import HTML from '../../assets/html.png'
import css from '../../assets/css.png'
import python from '../../assets/python.png'
import sql from '../../assets/sql.png'
import cLang from '../../assets/c-lang.png'

export function TechStack() {
    return (
        <>
            <div className='techStackContainer sec' id='techStack'>
            <span className='techStackHeading'>Tech Stack</span>
                    <span className='techStackHeading1'>Programmiersprachen</span>

                    <div className='cubeRow'>
                        <div className='test'>
                            <Cube img={Typescript}/>
                        </div>
                        <div className='test'>
                            <Cube img={JavaScript}/>
                        </div>
                    </div>

                    <div className='cubeRow'>
                        <div className='test'>
                            <Cube img={HTML}/>
                        </div>
                        <div className='test'>
                            <Cube img={css}/>
                        </div>
                    </div>

                    <div className='cubeRow'>
                        <div className='test'>
                            <Cube img={python}/>
                        </div>
                        <div className='test'>
                            <Cube img={sql}/>
                        </div>
                    </div>

                    <div className='test'>
                        <Cube img={cLang}/>
                    </div>
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