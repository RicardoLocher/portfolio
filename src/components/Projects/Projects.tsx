import './Projects.css'
import GithubLogo from '../../assets/github.png'

export function Projects() {
    return (
        <div className='projectsContainer'>
            <span className='projectsHeading'>Projects</span>
            <Project title='Own-Cloud' 
                     description='Own-Cloud ist eine Cloudsoftware, die vom Nutzer selbst gehostet wird. Die Software ist Open-Source und kann auf jedem Server installiert werden. Sie ist in Python und JavaScript geschrieben und nutzt Django als Backend und eine in React geschriebene Benutzeroberfläche. Bald auch als offizielles Docker-Image verfügbar.' 
                     link='https://github.com/RicardoLocher/own_cloud' />
            <Project title='Network - Web50'
                     description='Network war ein Projekt, das ich im Rahmen des Harvard Web50-Kurses erstellt habe. Es ist ein soziales Netzwerk, das auf Twitter basiert. Das Ziel war es die Grundfunktionen eines sozialen Netzwerks zu implementieren. Es ist in Python und JavaScript geschrieben und nutzt Django als Backend.'
                     link='https://github.com/RicardoLocher/network-web50' />
            <span className='projectsHeading'>Side Projects</span>
            <Project title="Discord Meme Bot"
                    description='Der Discord Meme-Bot war ein kleines Nebenprojekt, das ich in meiner Freizeit erstellt habe. Der Bot kann Memes aus verschiedenen Subreddits abrufen und in Discord-Servern posten. Er ist in JavaScript geschrieben und nutzt die Discord.js-Bibliothek. Ich hoste ihn derweil auf meinem privaten Server.'
                    link='https://github.com/RicardoLocher/Discord-Meme-Bot' />
            <Project title="Discord AI Bot"
                    description='Der Discord AI-Bot ist ein weiteres Nebenprojekt, meinerseits. Der Bot kann mit Hilfe von API-Wrappern mit verschiedenen LLMs kommunizieren und den Nutzern des Discord Servers alle möglichen Fragen beantworten. Er ist in Python geschrieben, und auch ihn hoste ich selbst.'
                    link='#' />
            <Project title="Neofetch for Windows"
                    description='Neofetch for Windows ist ein Python Skript, das die Funktionalität des beliebten Neofetch-Tools auf Windows-Systemen nachbildet. Ich habe es anfangs nur aus langeweile geschrieben, doch es hat sich für mich persönlich als Nützlich herausgestellt.'
                    link='https://github.com/RicardoLocher/neofetch-for-windows' />
            
        </div>
    )
}

function Project(props: {title: string, description: string, link: string}) {

    return (
        <div className='project'>
            <span className='projectTitle'>{props.title}</span>
            <p>{props.description}</p>
            <a href={props.link} target='_blank'>
            <img src={GithubLogo} alt="github logo" className='githubLogo'/>
            </a>
        </div>
    )
}