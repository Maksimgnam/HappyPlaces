import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './Sending.css';

const Sending = ({ CloseSending }) => {
    const [Name, setName] = useState('');
    const [yourName, setYourName] = useState('');

    const [message, setMessage] = useState('');
    let text = 'Happy Places'

    const Submit = (e) => {
        e.preventDefault();

        const emailContent = {
            Name: text,
            yourName: yourName,

            message: message
        };

        emailjs
            .send('service_if5znfd', 'template_z2m1vsa', emailContent, 'XIKKVFGQTwbBsdkZH')
            .then((result) => {
                console.log(result.text);
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="Sending">
            <div className="SendingHead">
                <button className='SendingHeadClose' onClick={CloseSending}>Close</button>
            </div>
            <div className="SendingCont">
                <form onSubmit={Submit} className='SendCard'>
                    <h3>Напиши свої враження про ці місця</h3>
                    <input type="text" placeholder="Your Name" value={yourName} onChange={(e) => setYourName(e.target.value)} className='SendInput' />

                    <textarea type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} className='SendInputMes' />
                    <button type="submit" className='SendBtn'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Sending;


