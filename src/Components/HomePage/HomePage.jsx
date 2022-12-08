import React from 'react';
import { scrollTop } from '../Functions/ImpFunctions';
import Template from '../Template/Template';
import './HomePage.css';

const HomePage = () => {

  React.useEffect(()=>{
    scrollTop();
  },[])
  return (
    <>
      <section className="home-section">
        <div className="home-content">          
        <h1>Welcome to MusicWorld.com</h1>
          <p>We are the provider of best music in the world</p>
        </div>
      </section>
      <div className="features">
        <Template />
      </div>
    </>
  )
}

export default HomePage;