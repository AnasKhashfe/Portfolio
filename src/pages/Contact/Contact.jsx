import Form from './Form/Form';
import ContactInfo from './ContactInfo/ContactInfo';
import './Contact.css'


function Contact() {


    return (
        <>
            <section className="contact-section" id='contact'>
                <div className="main-top-section">

                    <h1 className="main-text">
                        Get In Touch
                    </h1>
                    <p className='section-description'>
                        Got a project or opportunity? Send me a message and I will get back to you as soon as possible.
                    </p>
                </div>
                <div className="bottom-s">

                    <ContactInfo />
                    <Form />

                </div>
            </section>

        </>
    )
}

export default Contact;
