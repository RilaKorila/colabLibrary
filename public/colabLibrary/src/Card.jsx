import classes from './Card.module.css';

function Card() {
    return (
        <div className={classes.card}>
            <h3 className={classes.title}>Question1</h3>
            <p className={classes.content}>Contents</p>
            <p className={classes.cardLink}>
                <a href="link">here</a>
            </p>
        </div>
    );
}

export default Card;
