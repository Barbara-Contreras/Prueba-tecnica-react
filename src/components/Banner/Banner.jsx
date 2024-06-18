import { BannerText } from './BannerText/BannerText.jsx'
import { BannerTitle } from './BannerTitle/BannerTitle.jsx'
import { BannerButton } from './BannerButton/BannerButton.jsx'
import './Banner.css'
import bannerImage from '../../assets/img-banner.jpg';

export function Banner() {
    return (
        <div className="banner-container">
            <img src={bannerImage} alt="Banner" className="banner-image" />
            <BannerText />
            <BannerTitle />
            <BannerButton />
        </div>
    )
}