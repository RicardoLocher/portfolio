import './Projects.css'
import GithubLogo from '../../assets/github.png'
import ownCloud from '../../assets/screenshots/own-cloud.png'
import asteroids from '../../assets/screenshots/asteroids.png'
import cppCraft from '../../assets/screenshots/cppCraft.png'
import aiBot from '../../assets/screenshots/AiBot.png'
import memeBot from '../../assets/screenshots/memeBot.png'
import cs50 from '../../assets/screenshots/CS50x-1.png'

export function Projects() {
    return (
        <div className='projectsContainer sec' id='projects'>
                <span className='projectsHeading' style={{marginBottom: '20px'}}>Projekte</span>

            <Project title="CppCraft"
                description='CppCraft soll ein Minecraft Klon werden der auf Grund einer eigens geschriebenen Engine in C++ eine erhebliche Performance Überlegenheit zum original Videospiel haben soll. Aktuell ist es noch closed source bis ich mit der Weltgenerierung zufrieden bin. Es ist bis Dato mein lieblings Projekt da gerade die Engine eine gute Herausforderung darstellt.'
                link='https://github.com/RicardoLocher/CppCraft' openSource={false} image={cppCraft}/>

            <Project title='Own-Cloud' 
                     description='Own-Cloud ist eine Cloudsoftware, die vom Nutzer selbst gehostet wird. Bald auch als offizielles Docker-Image verfügbar.' 
                     link='https://github.com/RicardoLocher/own_cloud' openSource={false} image={ownCloud}/>

            <Project title="Discord AI Bot"
                    description='Der Discord AI-Bot ist ein weiteres Nebenprojekt, meinerseits. Der Bot kann mit Hilfe von aggressiven Web Scraping Methoden mit verschiedenen LLMs kommunizieren und den Nutzern des Discord Servers alle möglichen Fragen beantworten. Er ist in Python geschrieben, ist aber mittlerweile closed source und auch nichtmehr in gebrauch.'
                    link='#' openSource={false} image={aiBot}/>

            <span className='projectsHeading'>Side Projects</span>

            <Project title='Asteroids from Scratch'
                     description='Asteroids from Scratch war mein erstes richtiges Natives VideoSpiel und wie der Name des Projektes schon verrät, habe ich die Game Engine selbst geschrieben. Aktuell ist es noch work in Progress da mir die Zeit fehlt. Geschrieben habe ich das Spiel in C++ mit der SFML Multimedia Library.'
                     link='https://github.com/RicardoLocher/asteroids-from-scratch' openSource={true} image={asteroids}/>

            <Project title="Discord Meme Bot"
                    description='Der Discord Meme-Bot war ein kleines Nebenprojekt, das ich in meiner Freizeit erstellt habe. Der Bot kann Memes aus verschiedenen Subreddits abrufen und in Discord-Servern posten. Er ist in JavaScript geschrieben und nutzt die Discord.js-Bibliothek. Ich hoste ihn derweil auf meinem privaten Server.'
                    link='https://github.com/RicardoLocher/Discord-Meme-Bot' openSource={true} image={memeBot}/>

            <Project title='Portfolio'
                     description='Mein Portfolio ist die Website, die Sie gerade betrachten. Sie ist in React geschrieben und nutzt verschiedene Front-End Techniken, wie zum beispiel den Parallax-Effekt und einige aufwändige CSS Animationen. Der komplette Code ist in Typescript geschrieben und Open Source.'
                     link='https://github.com/RicardoLocher/portfolio' openSource={true} image={cs50}/>
            
        </div>
    )
}

function Project(props: {title: string, description: string, link: string, openSource: boolean, image: string}) {
    if (props.openSource) {
        return (
                <div className='project'>
                    <div className='ProjectImage'>
                        <img src={props.image} alt='Screenshoot' className='image' />
                    </div>
                    <div style={{padding: '15px'}}>
                        <span className='projectTitle'>{props.title}</span>
                        <p className='projectDescription'>{props.description}</p>
                        <a href={props.link} target='_blank'>
                        <img src={GithubLogo} alt="github logo" className='githubLogo'/>
                        </a>
                    </div>
                </div>
        )
    }
    
    return (
        <div className='project'>
            <div className='ProjectImage'>
                <img src={props.image} alt='Screenshoot' className='image'/>
            </div>
            <div style={{padding: '15px'}}>
                <hr style={{borderTop: "2px solid white"}} />
                <span className='projectTitle'>{props.title}</span>
                <p className='projectDescription'>{props.description}</p>
            </div>
        </div>
    )
}