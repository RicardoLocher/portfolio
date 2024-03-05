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
import link from '../../assets/link.png'

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
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/react-native.png' title='React' link='https://react.dev/'/>
                    <TechStackItem title='React Native' icon='https://img.icons8.com/color/48/000000/react-native.png' link='https://reactnative.dev/'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/nodejs.png' title='Node.js' link='https://nodejs.org/en'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/django.png' title='Django' link='https://www.djangoproject.com/'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/bootstrap.png' title='Bootstrap' link='https://getbootstrap.com/'/>
                    <TechStackItem title='Flask' icon='https://img.icons8.com/color/48/000000/flask.png' link='https://flask.palletsprojects.com/en/3.0.x/'/>
                <p>icons by <a href='https://icons8.com/' target='_blank'>icons8</a></p>
            </div>
        </>
        )
}

function TechStackItem(props: {icon: string, title: string, link: string}) {

    return (
        <div className='myCard'>
            <div className='innerCard'>
                <div className='frontSide'>
                    <img src={props.icon} alt='icon' />
                    <p className='title'>{props.title}</p>
                </div>
                <div className='backSide'>
                    <Button onClick={() => window.open(props.link, '_blank')} style={{fontSize: '1.1em'}}>Zur Website {linkIcon(link)}</Button>
                </div>
            </div>
        </div>
    )
}

function linkIcon(img: string) {
    return (
        <img src={img} alt='icon' className='linkIcon'/>
    )
}