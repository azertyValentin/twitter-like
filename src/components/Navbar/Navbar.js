import logo from '../../assets/twitter_logo.png';
import './Navbar.css'
import {BrowserRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Acceuil from '../Acceuil/Acceuil';
import Profil from '../Profil/Profil';

function Navbar() {
    return (
      <BrowserRouter>
        <div className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <NavLink to="/acceuil" activeStyle={{ fontWeight: 'bold' }} style={{ color: 'inherit', textDecoration: 'inherit', fontWeight: 'normal'}}><p>Acceuil</p></NavLink>
            <NavLink to="/profil" activeStyle={{ fontWeight: 'bold' }} style={{ color: 'inherit', textDecoration: 'inherit', fontWeight: 'normal'}}><p>Profil</p></NavLink>
        </div>
        <Switch>
            <Route path="/profil">
                <div className="main-container">
                    <Profil/>
                </div>
            </Route>
            <Route path="/acceuil">
                <div className="main-container">
                    <Acceuil/>
                </div>
            </Route>
            <Route path="/">
                <Redirect to="/acceuil" />
            </Route>
        </Switch>
      </BrowserRouter>
    )
}

export default Navbar;