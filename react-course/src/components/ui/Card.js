import classes from './Card.module.css';

function Card(props) {
    return (
        <div className={classes.card}>
            {props.children} {/*Getting content between our created tags in parent components*/}
        </div>
    );
}

export default Card;