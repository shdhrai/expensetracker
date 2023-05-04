import "./Card.css";

// We can write a function also as a arrow function.

const  Card = (props) =>{
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
    // props.children is used to show the content inside that div as a children of that section
    
}

export default Card;