// Its a reusable wrapper component

import "./Card.css";
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card;

//One special prop is built in react which every component receives
//The value of this children of this prop is the value between the opening and closing tags of card
