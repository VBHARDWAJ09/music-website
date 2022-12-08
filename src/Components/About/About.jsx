import React from 'react';
import './About.css';
import vishal from '../../Icons/vishal.jpg';
import { scrollTop } from '../Functions/ImpFunctions';

const About = () => {

    React.useEffect(()=>{
        scrollTop();
    },[])

    return (
        <section className='about-section'>
            <div className="main">
                <h1>About</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis veniam placeat consectetur rem corporis fugit veritatis, ut tenetur iusto nisi alias minima minus magnam aspernatur, nobis quidem numquam odit dolore.
                </p>
                <div className="intro-section">
                    <div className="intro-card">
                        <img src={vishal} alt="" />
                        <div className="intro-content">
                            <h5>Vishal Bhardwaj</h5>
                            <h6>Front End Developer</h6>
                            <div className="social-logo">
                                <a href='https://twitter.com/VBHARDWAJ_09' target={"_blank"}><i className="fa-brands fa-twitter"></i></a>
                                <a href='https://www.facebook.com/profile.php?id=100029196540507' target={"_blank"}><i className="fa-brands fa-facebook"></i></a>
                                <a href='https://www.instagram.com/vbhardwaj09/' target={"_blank"}><i className="fa-brands fa-instagram"></i></a>
                                <a href='https://www.linkedin.com/in/vishal-bhardwaj-943420208/' target={"_blank"}><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;