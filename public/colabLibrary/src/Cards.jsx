import classes from './Cards.module.css';
import Card from './Card';

function Cards() {
    return (
        <div className={classes.cards}>
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Cards;
