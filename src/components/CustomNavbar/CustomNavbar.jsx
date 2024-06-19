import { Logo } from './Logo/Logo.jsx'
import { Section } from './Section/Section.jsx'
import './CustomNavbar.css'
import PropTypes from 'prop-types';


export function CustomNavbar({ sections }) {
    return (
        <div className='custom-navbar-style'>
            <Logo />
            <div className="custom-nav-sections">
                {sections.map((section, index) => (
                    <Section key={index} name={section.name} />
                ))}
            </div>
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