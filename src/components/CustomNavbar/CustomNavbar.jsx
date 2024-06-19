import { Logo } from './Logo/Logo.jsx'
import { Section } from './Section/Section.jsx'
import './CustomNavbar.css'
import PropTypes from 'prop-types';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export function CustomNavbar({ sections }) {
    return (
        <div className="custom-navbar-style">
            <Logo />
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {sections.map((section, index) => (
                            <Section key={index} name={section.name} />
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

CustomNavbar.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};