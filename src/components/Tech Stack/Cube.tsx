import './Cube.css'

export function Cube(props: {img: string}) {
  return (
    <div className="loader">
        <div className="cube">
            <div className="face"><img src={props.img} alt="Icon" className='CubeIcon'/></div>
            <div className="face"><img src={props.img} alt="Icon" className='CubeIcon'/></div>
            <div className="face"><img src={props.img} alt="Icon" className='CubeIcon'/></div>
            <div className="face"><img src={props.img} alt="Icon" className='CubeIcon'/></div>
            <div className="face"><img src={props.img} alt="Icon" className='CubeIcon'/></div>
            <div className="face"><img src={props.img} alt="Icon" className='CubeIcon'/></div>
        </div>
    </div>  
  );
}