import { Logo } from './Logo/Logo.jsx'
import { Section } from './Section/Section.jsx'
import './Navbar.css'
import PropTypes from 'prop-types';

export function Navbar({ sections }) {
    return (
        <div className='navbar-style'>
            <Logo />
            <div className='nav-sections'>
                {sections.map((section, index) => (
                    <Section key={index} name={section.name} />
                ))}
            </div>
        </div>
    );
}

Navbar.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};