import React, { useState, useEffect } from 'react';
import './MusicPlayer.css';
import Lottie from "react-lottie-player";
import loader from '../../Icons/music-loader.json';

const MusicPlayer = ({ data }) => {
    const [timer, setTimer] = useState(0)
    const [play, setPlay] = useState(true)


    useEffect(() => {
        if (play) {
            setTimeout(() => {
                if (timer < data.duration) {
                    setTimer(timer + 1)
                } else if (timer === data.duration) {
                    setPlay(false)
                }
            }, 1000)
        }
    }, [timer, play])

    const handlePausePlay = () => {
        if (timer === data.duration) {
            setTimer(0)
        }
        setPlay(!play)

    }

    return (
        <section className="music-player-section">
            {data ? <div className="player">
                <div className="player-box">
                    <span>Playing Song</span>
                    <img src={data.thumbnail} alt="NA" className="player-img" />
                    <span>{data.title.length > 16 ? data.title.slice(0, 16) + "..." : data.title}</span>
                    <span>{data.artists[0].name.length > 16 ? data.artists[0].name.slice(0, 16) : data.artists[0].name}</span>
                    <div className="range-bar">
                        <label>{Math.floor(timer / 60)}:{timer - Math.floor(timer / 60) * 60}</label>
                        <input type="range" readOnly min={0} max={data.duration} value={timer} />
                        <label>{Math.floor(data.duration / 60)}:{data.duration - Math.floor(data.duration / 60) * 60}</label>
                    </div>
                    <div className="play-options">
                        <button className="play" onClick={() => handlePausePlay()}>
                            {!play ? <i className="fa-solid fa-play"></i> :
                                <i className="fa-solid fa-pause"></i>}
                        </button>
                    </div>
                </div>
            </div> :
                <div className='lottie-player'><span><Lottie loop animationData={loader} play /></span></div>}
        </section>
    )
}

export default MusicPlayer;