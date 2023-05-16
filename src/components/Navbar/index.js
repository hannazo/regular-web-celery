import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faFolder, faEnvelope, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
    // HEADER WITH NAVIGATION SECTION
    <header>
        <div className="logo">
            <Link to="/">
                <img src={Logo} alt="logo"></img>
            </Link>
        </div>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faHome} color="#565555" />
                </div>
                <div className="text-container">
                    <span>HOME</span>
                </div>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faUser} color="#565555" />
                </div>
                <div className="text-container">
                    <span>ABOUT</span>
                </div>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/portfolio">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faFolder} color="#565555" />
                </div>
                <div className="text-container">
                    <span>PORTFOLIO</span>
                </div>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faEnvelope} color="#565555" />
                </div>
                <div className="text-container">
                    <span>CONTACT</span>
                </div>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faFileInvoice} color="#565555" />
                </div>
                <div className="text-container">
                    <span>RESUME</span>
                </div>
            </NavLink>
        </nav>
    </header>
);

export default Navbar