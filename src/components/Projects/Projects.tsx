import './Projects.css'
import GithubLogo from '../../assets/github.png'

export function Projects() {
    return (
        <div className='projectsContainer'>
            <span className='projectsHeading'>Projects</span>
            <Project title='Own-Cloud' 
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt cumque ab dolorem et adipisci nobis deleniti vero blanditiis. A, ducimus magnam amet fugit illo fuga porro quas. Suscipit, ut?' 
                     link='https://github.com/RicardoLocher/own_cloud' />
            <Project title='Network - Web50'
                     description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, deserunt cumque ab dolorem et adipisci nobis deleniti vero blanditiis. A, ducimus magnam amet fugit illo fuga porro quas. Suscipit, ut?'
                     link='https://github.com/RicardoLocher/network-web50' />
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