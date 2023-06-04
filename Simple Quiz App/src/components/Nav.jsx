import Account from "./Account";
import classes from '../styles/Nav.module.css';
import Logo from '../assets/images/logo-bg.png';

export default function Nav(){
    return (
        <>
           <nav className={classes.nav}>
            <ul>
                <li>
                <a href="index.html" className={classes.brand}>
                    <img src={Logo} />
                    <h3>Learn with Sumit</h3>
                </a>
                </li>
            </ul>
            <Account></Account>
           </nav>     
        </>
    )
}