import React from "react";
import "./ContactForm.css";

function ContactForm() {
    return (
        <div className="contact-me-container">
            <h1>Contact me</h1>
            <form action="submit" className="contact-form">
            <label htmlFor="name">Your Name</label>
            <input type="text" className="name input" id="name" placeholder="Name" required />
            <label htmlFor="email">Your Email</label>
            <input type="email" className="email input" id="email" placeholder="Email" required />
            <label htmlFor="message">Leave your message below</label>
            <textarea id="message" name="message" className="message input" placeholder="Enter your message here"></textarea>
            <button type="submit" className="submit-button">Submit</button>
        </form>
        </div >
    )
}

export default ContactForm;