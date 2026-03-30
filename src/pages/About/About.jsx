
import './About.css'


function About() {


    return (
        <>



            <section className='about-section' id='about'>
                <div className="about-top">
                    <h1 className='main-text'>About Me</h1>
                    <div className="bio">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4084f1"><path d="M280-280h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm-80 480q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" /></svg>
                        <span className='main-text-about'>Bio</span>
                    </div>
                    <p>Software engineering graduate with a passion for front-end development. I enjoy building clean, responsive web interfaces and I'm always looking to learn and grow</p>
                    <a href="/files/Anas_Khashfeh_CV.pdf" download="Anas-Khashfe-CV.pdf"
                        className='download-cv'>
                        Download CV
                    </a>

                </div>
                <div className="about-right">
                    <div className="box">
                        <div className="img-sec">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4084f1"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" /></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4084f1"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h440q19 0 36 8.5t28 23.5l216 288-216 288q-11 15-28 23.5t-36 8.5H160Zm0-80h440l180-240-180-240H160v480Zm220-240Z" /></svg>
                            <span className='main-text-about'>

                                More details
                            </span>
                        </div>
                        <ul className="texts">
                            <li>Degree : B.S. in Software Engineering</li>
                            <li>Graduation Year : 2024</li>
                            <li>Location : Syria </li>
                            <li>Email : khashfeanas@gmail.com</li>
                            <li>Experience : +1 Year</li>
                            <li>Languages : Arabic, English</li>
                            <li className='available'>Availability :<span> Open to work</span></li>

                        </ul>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About;
