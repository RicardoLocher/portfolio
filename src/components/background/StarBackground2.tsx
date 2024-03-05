import star2 from '../../assets/Star2.png'
import star3 from '../../assets/Star3.png'
import './StarBackground.css'

export function CustomStarBackground(props: { height: number, count1: number, count2: number }) {
    let height = props.height;
    let stars = [];

    for (let i = 0; i < props.count1; i++) {
      let style = {
        // Calculates the random position
        // Only difference is that the left is 97vw instead of 99vw beacuse the img is bigger
        left: `${Math.random() * 97}vw`,
        top: `${Math.random() * height}vh`,

        // Sets the animation duration and delay also to a random number
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`
      };
      // Pushes the star into the stars array
      stars.push(<img className="starCustom" style={style} src={star2} />);
    }

    // Same as above but with a different image
    for (let i = 0; i < props.count2; i++) {
        let style = {
          left: `${Math.random() * 97}vw`,
          top: `${Math.random() * height}vh`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          animationDelay: `${Math.random() * 5}s`
        };
        stars.push(<img className="starCustom" style={style} src={star3} />);
    }

    // The stars array is rendered as children of a custom div (to make sure it doesn't overflow)
    return <div style={{
        height: height.toString() + "vh", 
        maxWidth: "99vw", 
        position: "absolute", 
        top: "0", 
        left: "0",
    }}>{stars}</div>;
}