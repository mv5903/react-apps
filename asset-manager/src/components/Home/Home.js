import { Link } from 'react-router-dom';
import classes from './Home.module.css';

function Home() {
    return (
        <div className={classes.home}>
            <h3 className={classes.homeTitle}>Welcome to Asset Manager!</h3>
            <div className={classes.infoCards}>
                <div>
                    <h3>View Your Assets</h3>
                    <p>Effortlessly view your stocks, cryptocurrencies, and more with intelligent graphs.</p>
                </div>
                <div>
                    <h3>Manage Your Assets</h3>
                    <p>Buy, sell, and convert your favorite stocks and cryptocurrencies.</p>
                </div>
                <div>
                    <h3>Connect Your Assets</h3>
                    <p>Easily connect to your favorite brokers like Coinbase, Robinhood, and ETrade.</p>
                </div>
            </div>
            <div  className={classes.waitingFor}>
            <p>What are you waiting for? <Link className={classes.signup} to="/account">Sign up now.</Link></p>
            </div>
        </div>
    );
}

export default Home;