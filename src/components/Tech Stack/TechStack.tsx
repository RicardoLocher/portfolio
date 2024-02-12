import './TechStack.css'

export function TechStack() {
    return (
        <>
            <div className='techStackContainer'>
            <span className='techStackHeading'>Tech Stack</span>
                    <span className='techStackHeading1'>Languages</span>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/typescript.png' text='TypeScript' />
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/javascript.png' text='JavaScript' />
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/html-5.png' text='HTML' />
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/css3.png' text='CSS' />
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/python.png' text='Python' />
                    <TechStackItem text='SQL' icon='https://img.icons8.com/color/48/000000/sql.png' />
                    <TechStackItem text='C' icon='https://img.icons8.com/color/48/000000/c-programming.png' />
                    <span className='techStackHeading1'>Frameworks</span>
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/react-native.png' text='React' />
                    <TechStackItem text='React Native' icon='https://img.icons8.com/color/48/000000/react-native.png' />
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/nodejs.png' text='Node.js' />
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/django.png' text='Django' />
                    <TechStackItem icon='https://img.icons8.com/color/48/000000/bootstrap.png' text='Bootstrap' />
                    <TechStackItem text='Flask' icon='https://img.icons8.com/color/48/000000/flask.png' />
                <p>icons by <a href='https://icons8.com/' target='_blank'>icons8</a></p>
            </div>
        </>
        )
}

function TechStackItem(props: {icon: string, text: string}) {
    return (
        <div className='techStackItem'>
            <img src={props.icon} alt='icon' />
            <p>{props.text}</p>
        </div>
    )
}