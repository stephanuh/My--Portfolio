import { useState, useEffect } from 'react';
import '../assets/styles/Contact.css';

export default function Contact() {
    useEffect(() => {
        document.title = "Contact Me";
    }, []);

    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState({});

    const handleChanges = (e) => {
        const { name, value } = e.target;
        let newErrors = { ...errorMessage };

        if (name === 'fullName'){
            setFullName(value);
            if (!value) newErrors.fullName = 'Full name is required';
            else delete newErrors.fullName;
        } else if (name === 'emailAddress'){
            setEmailAddress(value);
            const emailPatterns = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!value) newErrors.emailAddress = 'Email address is required';
            else if (!emailPatterns.test(value)) newErrors.emailAddress = 'Email address is invalid';
            else delete newErrors.emailAddress;
        } else if (name === 'userMessage'){
            setUserMessage(value);
            if (!value) newErrors.userMessage = 'Message is required';
            else delete newErrors.userMessage;
        }
        setErrorMessage(newErrors);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let newErrors = { ...errorMessage };

        if (name === 'fullName' && !value) newErrors.fullName = 'Full name is required';
        else if (name === 'emailAddress') {
            const emailPatterns = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!value) newErrors.emailAddress = 'Email address is required';
            else if (!emailPatterns.test(value)) newErrors.emailAddress = 'Email address is invalid';
            else delete newErrors.emailAddress;
        } else if (name === 'userMessage' && !value) newErrors.userMessage = 'Message is required';

        setErrorMessage(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!fullName) newErrors.fullName = 'Full name is required';
        if (!emailAddress) newErrors.emailAddress = 'Email address is required';
        if (!userMessage) newErrors.userMessage = 'Message is required';
        setErrorMessage(newErrors);
        if (Object.keys(newErrors).length === 0) {
            alert('Form submitted');
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-box">
                <h1 className="contact-title">Contact Me</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input 
                        className="input-field"
                        type="text"
                        name="fullName"
                        value={fullName}
                        placeholder="Your full name"
                        onChange={handleChanges}
                        onBlur={handleBlur}
                    />
                    {errorMessage.fullName && <div className="error-message">{errorMessage.fullName}</div>}

                    <input
                        className="input-field"
                        type="email"
                        name="emailAddress"
                        value={emailAddress}
                        placeholder="Your email address"
                        onChange={handleChanges}
                        onBlur={handleBlur}
                    />
                    {errorMessage.emailAddress && <div className="error-message">{errorMessage.emailAddress}</div>}

                    <textarea
                        className="input-field"
                        name="userMessage"
                        value={userMessage}
                        placeholder="Your message"
                        onChange={handleChanges}
                        onBlur={handleBlur}
                        rows="6"
                    />
                    {errorMessage.userMessage && <div className="error-message">{errorMessage.userMessage}</div>}

                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

 