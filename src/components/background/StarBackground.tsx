export function StarBackground(props: { height: number }) {
    let height = props.height;
    let stars = [];

    for (let i = 0; i < 300; i++) {
      let style = {
        // Calculates the random position
        left: `${Math.random() * 99}vw`,
        top: `${Math.random() * height}vh`,

        // Sets the animation duration and delay also to a random number
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`
      };

      // Pushes the star into the stars array
      stars.push(<div className="star" style={style} key={i}></div>);
    }

    // The stars array is rendered as children of the starBackground div
    return <div className="starBackground">{stars}</div>;
}