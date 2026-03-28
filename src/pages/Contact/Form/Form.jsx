import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import './Form.css'


function Form() {
    const [isSend, setIsSend] = useState(false);
    const form = useRef(null);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_0ls2c4o',
                'template_1c9kkwy',
                form.current,
                {
                    publicKey: '86qO9CpZCBV7z4a4M',
                }

            )
            .then(() => {
                form.current.reset();
                setIsSend(true);
                setTimeout(() => setIsSend(false), 3000)

            }

            ),
            (error) => {
                console.log('Failed...', error.text);
            }
    }

    return (
        <>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <div className="left">
                    <div className="flex">
                        <label>Name</label>
                        <input type="text" name="name" required placeholder='Anas Khashfe' />
                    </div>
                    <div className="flex">
                        <label>Email</label>
                        <input type="email" name="email" required placeholder='something@example.com' />
                    </div>
                    <div className="flex">
                        <label>Subject</label>
                        <input type="text" name="title" placeholder='How can I help you?' />
                    </div>
                    <div className='flex'>
                        <label>Message</label>
                        <textarea name="message" required placeholder='Your message here...' />
                    </div>
                </div>
                <div className="success-send">
                    <button type="submit">Send</button>
                    {
                        isSend && <svg className='success-msg' xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#75FB4C"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                    }


                </div>
            </form>
        </>
    )
}

export default Form;
