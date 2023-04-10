import Cards from './Cards';
import classes from './App.module.css';

function App() {
    return (
        <div className={classes.main}>
            <h2 className={classes.mainH2}>Title</h2>
            <Cards />
        </div>
    );
}

export default App;
