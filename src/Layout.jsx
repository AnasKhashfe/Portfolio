
import HeroSection from './pages/HeroSection/HeroSection';
import About from './pages/About/About';
import Header from './components/layout/Header/Header';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Footer from './components/layout/Footer/Footer';


function Layout() {


    return (
        <>
            <Header />
            <HeroSection />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer/>

        </>
    );
}

export default Layout
