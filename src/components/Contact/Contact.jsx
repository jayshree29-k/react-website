import React, { useState } from 'react';
import './Contact.css';
import msg from '../../assets/msg-icon.png';
import location from '../../assets/location-icon.png';
import email from '../../assets/mail-icon.png';
import phone from '../../assets/phone-icon.png';
import whiteArrow from '../../assets/white-arrow.png';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "f5c895dd-1fe1-4d3f-bb42-cb1d0ae827f7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Message Sent Successfully!" : "Error");
    };

    return (
        <div className='contact' id='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img src={msg} alt="messageicon" /></h3>
                <p>Feel free to contact me for any queries or assistance you may need. I'm always open to answering questions, discussing ideas, or providing support whenever required. Don't hesitate to reach out—I'll be glad to help and respond as quickly as possible.</p>
                <ul>
                    <li><img src={location} alt="" />123 Main St</li>
                    <li><img src={phone} alt="" />123-456-7890</li>
                    <li><img src={email} alt="" />info@edusity.com</li>
                </ul>
            </div>

            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" required />

                    <label>Your Phone Number</label>
                    <input type="tel" name="phone" required />

                    <label>Your Message</label>
                    <textarea name="message" rows="6" required />

                    <button className='btn dark-btn'>
                        Send Message <img src={whiteArrow} alt="" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
