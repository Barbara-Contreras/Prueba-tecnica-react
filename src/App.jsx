import './App.css'
import { Header } from './components/Header/Header.jsx'
import { CustomNavbar } from './components/CustomNavbar/CustomNavbar.jsx'
import { Banner } from './components/Banner/Banner.jsx'
import { FeatureItem } from './components/FeatureItem/FeatureItem.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import ellipseImage from './assets/img-ellipse.png';


export function App() {
    const sections = [
        { name: 'Inicio' },
        { name: 'Sección 2' },
        { name: 'Sección 3' },
    ];

    const featureItems = [
        { item: 'Item 1', text: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.' },
        { item: 'Item 2', text: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.' },
        { item: 'Item 3', text: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo.' },
    ]

    return (
        <>
            <Header />
            <CustomNavbar sections={sections} /> {/* Pasa las secciones como prop al Navbar */}
            <Banner />
            <img src={ellipseImage} alt="Elipse" className="ellipse-image" />
            <div className="feature-items-container">
                {featureItems.map((feature, index) => (
                    <FeatureItem key={index} item={feature.item} text={feature.text} />
                ))}
            </div>
            <Footer />
        </>
    );
}