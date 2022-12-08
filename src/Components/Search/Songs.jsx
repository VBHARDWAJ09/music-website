import React, {  useState } from 'react';
import './Search.css';
import Song from './Song';

const Songs = ({ searchedData,setDataFound }) => {
    const [songs, setSongs] = useState(searchedData.songs)



    return (
        <div className='searched'>

            <div className="manage-top">
                <span className='back-btn' onClick={()=>setDataFound(false)}><i className="fa-solid fa-left-long"></i>Back</span>

                <h3 className="heading">Songs</h3>
            </div>
            <div className="main-box">
                <div className="songs-list">
                    <ul>
                        {
                            songs.map((row, index) => {
                                return <Song key={index} data={row} setSongs={setSongs} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Songs;