import { useState, useEffect } from 'react';
import './Header.css'


function Header() {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    });

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            isDark ? 'dark' : 'light'
        )
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }, [isDark])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 940) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    })


    const handleScroll = () => {

        setIsOpen(false);

    }


    return (
        <>


            <div className="center-header">
                <div className='header'>
                    <h2 className='my-logo'>A<span>K</span></h2>
                    <div className='middle-side'>
                        <ul>
                            <a href='#home'>Home</a>
                            <a href='#about'>About me</a>
                            <a href='#projects'>Projects</a>
                            <a href='#skills'>Skills</a>
                            <a href='#contact'>Contact</a>
                        </ul>
                    </div>

                    <div className="right-side">
                        <span class="mode"
                            onClick={() => setIsDark(!isDark)}
                        >

                            {isDark ? (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" /></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>)}
                        </span>
                        <button className='hire-btn' onClick={() => window.location.href = 'mailto:khashfeanas@gmail.com'}>Hire me</button>
                        <span className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ?

                                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" ><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z" /></svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" ><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                            }
                        </span>
                    </div>
                </div>
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`} >
                    <a href="#home" onClick={handleScroll}>Home</a>
                    <a href="#about" onClick={handleScroll} >About</a>
                    <a href="#projects" onClick={handleScroll}>Projects</a>
                    <a href="#skills" onClick={handleScroll}>Skills</a>
                    <a href="#contact" onClick={handleScroll} >Contact</a>
                    <button className='hire-btn open' onClick={() => window.location.href = 'mailto:khashfeanas@gmail.com'}>Hire me</button>
                </div>
            </div>

        </>
    )
}

export default Header
