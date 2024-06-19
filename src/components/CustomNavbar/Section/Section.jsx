import { useState } from 'react';
import PropTypes from 'prop-types';
import './Section.css';

export function Section({ name }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked); // Cambia el estado al hacer clic
    };

    return (
        <span className="section-container">
            <p
                className={`section-name ${clicked ? 'clicked' : ''}`}
                onClick={handleClick}
            >
                {name}
            </p>
        </span>
    );
}

Section.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Section; 