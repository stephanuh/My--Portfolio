import { useState, useEffect } from 'react';
//import validator from 'validator';

export default function Contact() {
    useEffect(() => {
        document.title = "Contact me!";
    }, []);

    const [fullName, setFullName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChanges = (e) => {
        const { name, value } = e.target;
        let newErrors = { ...errorMessage };

        if (name === 'fullName'){
            setFullName(value);
            if (!value) {
                newErrors.fullName = 'Full name is required';
            }else{
                delete newErrors.fullName;
            }
        } else if (name === 'emailAddress'){
            setEmailAddress(value);

            const emailPatterns = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (!value) {
                newErrors.emailAddress = 'Email address is required';
            }else if (!emailPatterns.test(value)){
                newErrors.emailAddress = 'Email address is invalid';
            }
            {
                delete newErrors.emailAddress;
            }
            } else if (name === 'userMessage'){
                setUserMessage(value);
                if (!value){
                    newErrors.userMessage = 'Message is required';
                }else {
                    delete newErrors.userMessage;
                }
            }
            setErrorMessage(newErrors);
        };
        const handleBlur = (e) => {
            const { name, value } = e.target;
            let newErrors = { ...errorMessage };

            if (name === 'fullName' && !value){
                newErrors.fullName = 'Full name is required';
            }else if (name === 'emailAddress') {
                const emailPatterns = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!value) {
                    newErrors.emailAddress = 'Email address is required';
                }else if (!emailPatterns.test(value)) {
                    newErrors.emailAddress = 'Email address is invalid';
                }else{
                    delete newErrors.emailAddress;
                }
            }else if (name === 'userMessage' && !value){
                newErrors.userMessage = 'Message is required';
            }
            setErrorMessage(newErrors);
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            const newErrors = {};
            if (!fullName) 
                newErrors.fullName = 'Full name is required';
            if (!emailAddress)
                newErrors.emailAddress = 'Email address is required';
            if (!userMessage)
                newErrors.userMessage = 'Message is required';
            setErrorMessage(newErrors);
            if (Object.keys(newErrors).length === 0) {
                alert('Form submitted');
            };
        };

        return(
            <div className="container">
                <div className="row pt-5">
                    <div className="container col-md-6 body-main pt-5">
                        <h1 className="monospace-header">Contact!</h1>
                        <form className="form mt-5" onSubmit={handleSubmit}>
                            <input 
                            className="form-control w-100 mb-3 bg-dark text-light raleway-body"
                            type="text"
                            name="fullName"
                            value={fullName}
                            placeholder="Your full name"
                            onChange={handleChanges}
                            onBlur={handleBlur}
                            />
                            {errorMessage.fullName && <div className="text-danger">{errorMessage.fullName}</div>}
                                <input
                                className="form-control w-100 mb-3 bg-dark text-light raleway-body"
                                type="email"
                                name="emailAddress"
                                value={emailAddress}
                                placeholder="Your email address"
                                onChange={handleChanges}
                                onBlur={handleBlur}
                                />
                                {errorMessage.emailAddress && <div className="text-danger">{errorMessage.emailAddress}</div>}
                                <textarea
                                className="form-control w-100 mb-3 bg-dark text-light raleway-body"
                                name="userMessage"
                                value={userMessage}
                                placeholder="Your message"
                                onChange={handleChanges}
                                onBlur={handleBlur}
                                rows="8"
                                />
                                {errorMessage.userMessage && <div className="text-danger">{errorMessage.userMessage}</div>}
                                <button className="btn btn-primary w-100 " type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );

    };
 