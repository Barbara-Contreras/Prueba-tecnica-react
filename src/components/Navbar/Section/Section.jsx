import { useState } from 'react';
import PropTypes from 'prop-types';
import './Section.css';

export function Section({ name }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked); // Cambia el estado al hacer clic
    };

    return (
        <section className="section-container">
            <p
                className={`section-name ${clicked ? 'clicked' : ''}`}
                onClick={handleClick}
            >
                {name}
            </p>
        </section>
    );
}

Section.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Section; 