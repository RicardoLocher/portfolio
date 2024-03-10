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

import { Parallax } from 'react-scroll-parallax'

export function TechStack() {
    return (
        <>
            <div className='techStackContainer sec' id='techStack'>
            
            <Parallax style={{width: '100%', height: '100%', marginBottom: '40px', marginTop: '40px'}} className='parallaxContainer' speed={-5}>
                <span className='techStackHeading'>Tech Stack</span>
            </Parallax>

            <Parallax style={{width: '100%', height: '100%', marginBottom: '40px', marginTop: '40px'}} className='parallaxContainer' speed={-5}>
                <span className='techStackHeading1'>Programmiersprachen</span>
            </Parallax>

                <Parallax translateY={[-10, 10]} style={{width: '100%', height: '100%', marginBottom: '30px', marginTop: '30px', paddingBottom: '20px'}} className='parallaxContainer' speed={-10}>
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
                </Parallax>

                <Parallax style={{width: '100%', height: '100%', marginBottom: '50px', marginTop: '40px', zIndex: 1}} className='parallaxContainer' speed={-5}>
                    <span className='techStackHeading1'>Frameworks</span>
                </Parallax>

                <Parallax  style={{width: '110%', height: '100%', zIndex: 2}} speed={-10} className='parallaxContainer'>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/react-native.png' title='React' link='https://react.dev/'/>
                    <TechStackItem title='React Native' icon='https://img.icons8.com/color/48/000000/react-native.png' link='https://reactnative.dev/'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/nodejs.png' title='Node.js' link='https://nodejs.org/en'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/django.png' title='Django' link='https://www.djangoproject.com/'/>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/bootstrap.png' title='Bootstrap' link='https://getbootstrap.com/'/>
                </Parallax>
                    
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