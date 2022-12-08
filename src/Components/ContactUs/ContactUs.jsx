import React from 'react';
import { scrollTop } from '../Functions/ImpFunctions';
import './ContactUs.css';
import Form from './Form';

const ContactUs = () => {

    React.useEffect(()=>{
        scrollTop();
    },[])
    return (
        <section className="contactUs">
            <div className="main">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae consectetur modi odio veritatis nihil distinctio, dignissimos voluptatem nam, fugit vero ut doloremque itaque ducimus nesciunt cumque sed laboriosam assumenda possimus.</p>
                <div className="contact-boxes">
                    <div className="card-box">
                        <i className="fa-solid fa-location-dot"></i>
                        <h4>Our Address</h4>
                        <span>91/4, Balkeshwer, Agra, 282004</span>
                    </div>
                    <div className="card-box">
                        <i className="fa-regular fa-envelope"></i>
                        <h4>Email Us</h4>
                        <span>vb982002@gmail.com</span>
                    </div>
                    <div className="card-box">
                    <i className="fa-solid fa-phone"></i>
                    <h4>Call Us</h4>
                    <span>+91 9548578705</span>
                    </div>
                </div>
                <div className="contact-boxes">
                    <div className="card-box">
                    <div style={{width: "100%"}}><iframe title="iframe" width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=27.2140940,%2078.0289733+(Vishal%20Bhardwaj)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe></div>
                    </div>
                    <div className="card-box">
                        <Form/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs