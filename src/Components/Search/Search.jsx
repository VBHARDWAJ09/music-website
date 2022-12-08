import React, { useEffect, useState } from 'react';
import { SearchArtist } from '../API/API';
import './Search.css';
import Lottie from "react-lottie-player";
import loader from '../../Icons/music-loader.json';
import Songs from './Songs';

const Search = () => {
    const [searchText, setSearchText] = useState("")
    const [loaderTime, setLoaderTime] = useState(false)
    const [datafound, setDataFound] = useState(false)
    const [searchedData,setSearchData] = useState({})

    const searchThisText = async () => {
        if (searchText) {
            setLoaderTime(true)
            const APIDATA = await SearchArtist(searchText);
            if (APIDATA.status === 200) {
                setDataFound(true)
                setSearchData(APIDATA.data.result)
                setLoaderTime(false)
                setSearchText("")
            }
        }
    }
    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    }

    const handleSubmit = (event) => {
        if (event.keyCode == 13) {
            searchThisText();
        }
    }


    return (
        <>
            {loaderTime && <div className='lottie-player'><span><Lottie loop animationData={loader} play /></span></div>}
            {!datafound && <section className="artists-section">
                <div className="artist-content">
                    <div className="search-input">
                        <input type="text" autoFocus value={searchText} onChange={(e) => handleSearchTextChange(e)} onKeyUp={(e) => handleSubmit(e)} />
                        <i className="fa-solid fa-magnifying-glass" onClick={() => searchThisText()}></i>
                    </div>
                    <h1>Search your song</h1>
                </div>
            </section>}
            {datafound && <Songs searchedData={searchedData} setDataFound={setDataFound}/>}
        </>
    )
}

export default Search;