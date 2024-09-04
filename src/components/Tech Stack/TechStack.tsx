import './TechStack.css'
import './animations.css'
import { Cube } from './Cube.tsx'
import { Button } from 'react-bootstrap'

import Typescript from '../../assets/Typescript.png'
import JavaScript from '../../assets/JavaScript.png'
import HTML from '../../assets/html.png'
import css from '../../assets/css.png'
import python from '../../assets/python.png'
import sql from '../../assets/sql.png'
import cLang from '../../assets/c-lang.png'
import cpp from '../../assets/cpp.png'


export function TechStack() {
    return (
        <>
            <div className='techStackContainer sec' id='techStack'>
            
                <span className='techStackHeading'>Tech Stack</span>
            
                <span className='techStackHeading1'>Programmiersprachen</span>

                    <div className='cubeRow'>
                        <div className='cubeHolder'>
                            <Cube img={cLang}/>
                        </div>
                        <div className='cubeHolder'>
                            <Cube img={cpp} />
                        </div>
                    </div>

                    <div className='cubeRow'>
                        <div className='cubeHolder'>
                            <Cube img={Typescript}/>
                        </div>
                        <div className='cubeHolder'>
                            <Cube img={JavaScript}/>
                        </div>
                    </div>

                    <div className='cubeRow'>
                        <div className='cubeHolder'>
                            <Cube img={HTML}/>
                        </div>
                        <div className='cubeHolder'>
                            <Cube img={css}/>
                        </div>
                    </div>

                    <div className='cubeRow'>
                        <div className='cubeHolder'>
                            <Cube img={python}/>
                        </div>
                        <div className='cubeHolder'>
                            <Cube img={sql}/>
                        </div>
                    </div>

                    <span className='techStackHeading1'>Frameworks</span>

                    <TechStackItem icon='https://img.icons8.com/color/48/000000/react-native.png' title='React' link='https://react.dev/'/>
                    <TechStackItem title='React Native' icon='https://img.icons8.com/color/48/000000/react-native.png' link='https://reactnative.dev/'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/nodejs.png' title='Node.js' link='https://nodejs.org/en'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/django.png' title='Django' link='https://www.djangoproject.com/'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/bootstrap.png' title='Bootstrap' link='https://getbootstrap.com/'/>
                    
            </div>
        </>
        )
}

function TechStackItem(props: {icon: string, title: string, link: string}) {

    const linkStyle = {
        fontSize: '1.1rem',
        fontWeight: 'bolder',
    }

    return (
            <div className='myCard'>
                <div className='innerCard'>
                    <div className='frontSide'>
                        <img src={props.icon} alt='icon' />
                        <p className='title'>{props.title}</p>
                    </div>
                    <div className='backSide'>
                        <Button onClick={() => window.open(props.link, '_blank')} style={linkStyle}>Zur Website</Button>
                    </div>
                </div>
            </div>
    )
}