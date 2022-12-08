import React, { useEffect, useState } from 'react';
import { Downloading, DownloadSong, getAlbum, getArtist } from '../API/API';
import './Search.css';
import Lottie from "react-lottie-player";
import loader from '../../Icons/download.json';
import { Link } from 'react-router-dom';
import mainloader from '../../Icons/music-loader.json';

const Song = ({ data, setSongs }) => {
    const [loading, setLoading] = useState(false)
    const [mainLoading, setMainLoading] = useState(false)
    const [songTime, setSongTime] = useState({
        min: "", sec: ""
    })
    useEffect(() => {
        if (data.duration) {
            var min = Math.floor(data.duration / 60);
            var sec = data.duration - Math.floor(data.duration / 60) * 60
            sec = sec < 10 ? '0' + sec : sec;
            setSongTime({ ...songTime, min: min, sec: sec })
        }
    }, [])

    const DownloadThisSong = async (id) => {
        setLoading(true)
        const APIDATA = await DownloadSong(id)
        if (APIDATA.status === 200) {
            const link = document.createElement('a')
            var newli = APIDATA.data.result.download_url;
            link.href = newli
            link.setAttribute('download', data.name)
            document.body.appendChild(link)
            link.click()
            
        }
        setLoading(false)
    }

    const FetchThisAlbum = async (id) => {
        setMainLoading(true)
        const APIDATA = await getAlbum(id);
        if (APIDATA.data.result.songs) {
            setSongs(APIDATA.data.result.songs)
            setMainLoading(false);
        }
    }

    const FetchThisArtist = async (id) => {
        setMainLoading(true)
        const APIDATA = await getArtist(id);
        if (APIDATA.data.result.songs) {
            setSongs(APIDATA.data.result.songs);
            setMainLoading(false);
        }
    }

    return (
        <li className='boxing'>
            {mainLoading && <div className='lottie-player'><span><Lottie loop animationData={mainloader} play /></span></div>}
            <img src={data.thumbnail} alt={data.name} />
            <div className="song-content">
                <span><i className="fa-solid fa-circle-play"></i>
                    {data.title.length > 20 ? data.title.slice(0, 20).replace('&', ',') + "..." : data.title}
                </span>
                <span ><i className="fa-solid fa-circle-dot"></i>
                    <Link onClick={() => FetchThisArtist(data.artists[0].artist_id)}>{data.artists[0].name > 20 ? data.artists[0].name.slice(0, 20).replace('&', ',') + "..." : data.artists[0].name}</Link>
                </span>
                {data.duration && <span><i className="fa-solid fa-circle-dot"></i>
                    {songTime.min}:{songTime.sec} min
                </span>}
                {data.album.name && <span><i className="fa-solid fa-circle-dot"></i>
                    <Link onClick={() => FetchThisAlbum(data.album.album_id)}>{data.album.name}</Link>
                </span>}
            </div>

            <div className="options">
                <button onClick={() => DownloadThisSong(data.id)} disabled={loading}>
                    {loading ?
                        <Lottie loop animationData={loader} play className='download-lottie' />
                        :
                        <>
                            <i className="fa-solid fa-download"></i>
                            Download song
                        </>
                    }
                </button>

                <button className='play' >
                    <Link
                    // to='/music-player'
                    >
                        <i className="fa-solid fa-play"></i>
                        Play Song
                    </Link>
                </button>
            </div>
        </li>
    )
}

export default Song;

