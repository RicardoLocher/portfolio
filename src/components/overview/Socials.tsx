import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedIn from '../../assets/linked-in.png'

import './Socials.css'

export function Socials():JSX.Element {
    return(
        <div className="socialsContainer">
            <Block id='github' link='https://github.com/RicardoLocher' img={github}/>
            <Block id='Instagram' link='https://www.instagram.com/ricardo.l1311/' img={instagram}/>
            <Block id='LinkedIn' link='https://www.linkedin.com/in/ricardo-locher-7166a42b9/' img={linkedIn}/>
        </div>
    )
}

function Block(props: {id: string, link:string, img: string}):JSX.Element {
    return(
        <div className='block' id={props.id} onClick={() => {window.open(props.link, '_blank')}}>
            <img src={props.img} alt='icon' className="socialsIcon"/>
        </div>
    )
}