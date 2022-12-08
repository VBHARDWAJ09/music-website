import React from 'react'
import './Template.css';
import violin from '../../Icons/violin.jpg'

const Template = () => {
    return (
        <>
            <div className="main-box">
                <h1>What is MusicWorld.com</h1>
                <p>This is a place where you can download all your favourate songs easily.
                </p>
                <p>You can search for your all favourate songs, Artists or Albums</p>
                <div className="cards">
                    <div className="card">
                        Songs
                        <img src={violin} alt="NA" />
                    </div>
                    <div className="card">
                        Artists
                        <img src={violin} alt="NA" />
                    </div>
                    <div className="card">
                        Albums
                        <img src={violin} alt="NA" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Template;