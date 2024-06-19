import './Logo.css'
import logoImage from '../../../assets/img-logo.png';

export function Logo () {
    return (
        <img src={logoImage} alt="Logo" className="logo-image" />
    )
}