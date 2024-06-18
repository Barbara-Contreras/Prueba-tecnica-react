import PropTypes from 'prop-types';
import './FeatureItem.css';
import coheteImage from '../../assets/img-cohete.jpg';

export function FeatureItem({ item, text }) {
    return (
        <div>
        <section className="item-container">
               <img src={coheteImage} alt="Cohete" className="cohete-image" />
            <h1 className="item-title">{item}</h1>
            <p className="item-text">{text}</p>
        </section>
        </div>
    )
}

FeatureItem.propTypes = {
    item: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default FeatureItem; 