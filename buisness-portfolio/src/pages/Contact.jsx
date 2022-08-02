import React, {useRef} from "react";
import contact from "../Assets/Styles/contact.css";
import sendmail from '../assets/images/sendmail.jpeg';
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import emailjs from "emailjs-com";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    // lets user know message was sent 
    const feedbackEL = document.querySelector('.feedback');
    feedbackEL.setAttribute('class', 'feedback');
    setTimeout(function(){
        feedbackEL.setAttribute('class','feedback hide');

    },4000);

    emailjs
    .sendform(
        "service_fue95l",
        "template_gdjxp6g",
        form.current,
        "KfGVyjhX_IvddnHea"
    )
    .then(
        (result) => {
            console.log(result.text);
        },
        (error) => {
            console.log(error.text);
        }
    );

   e.target.reset();
    
    };

 
return (
    <section className={contact}>
        <h2 className='text-white pt-4'>Contact Me</h2>

        <div className="container contact_container">
            <div className="contact_options">
                <article className="contact_option">
                    <AiOutlineMail className="contact_option-icon" />
                    <h4>Email</h4>
                    <a href="mailto: iiisantosjangel@gmail.com">Send Message</a>
                </article>
                <article className="cpntact_option">
                    <BsMessenger className='contact_option-icon' />
                    <h4>Messenger</h4>
                    <a
                    target='_blank'
                    rel='noreferrer'
                    href="htpps://m.me/angel.santos"
                    >
                     Send Message
                    </a>
                </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    />
                    <input type="text" name='email' placeholder="Your Email" required />
                    <textarea
                    name='message'
                    rows='5'
                    placeholder='Your Message'
                    required
                    ></textarea>
                    <button type='submit' className=" send btn btn-primary text-white">
                        Send Message
                    </button>
                    <div className="feedback hide"><img src={sendmail} alt='' height='150'/>
                    </div>
                </form>
                </div> 
    </section>
);
};



export default Contact;