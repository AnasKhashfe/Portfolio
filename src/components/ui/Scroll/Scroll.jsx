import { useEffect, useState } from "react";
import './Scroll.css'


function Scroll() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setIsScrolled(true) : setIsScrolled(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    const handleScrollClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    }

    return (
        <>
            <button className={isScrolled ? 'arrow-up scrolled' : 'arrow-up'} onClick={handleScrollClick}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#f1f1f1"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" /></svg>
            </button>

        </>
    )
}

export default Scroll;
