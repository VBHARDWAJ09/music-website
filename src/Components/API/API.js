import axios from 'axios'
const URL = `https://youtube-music1.p.rapidapi.com/v2/search`;
const headers = {
    'X-RapidAPI-Key': '25ad1acd4bmsh231760e1d383b49p193ebajsnea5fa13b96df',
    'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
}

export const SearchArtist = async (data) => {

    const options = {
        method: 'GET',
        url: 'https://youtube-music1.p.rapidapi.com/v2/search',
        params: { query: data },
        headers: {
            'X-RapidAPI-Key': '25ad1acd4bmsh231760e1d383b49p193ebajsnea5fa13b96df',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    return await axios.request(options).then((res) => {
        return res;
    })
}

export const DownloadSong = async (data) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-music1.p.rapidapi.com/get_download_url',
        params: { id: data, ext: 'mp3' },
        headers: {
            'X-RapidAPI-Key': '25ad1acd4bmsh231760e1d383b49p193ebajsnea5fa13b96df',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    return await axios.request(options)
        .then((res) => {
            return res;
        })
}

export const getAlbum = async (data) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-music1.p.rapidapi.com/v2/get_album',
        params: { album_id: data },
        headers: {
            'X-RapidAPI-Key': '25ad1acd4bmsh231760e1d383b49p193ebajsnea5fa13b96df',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    return await axios.request(options)
        .then((res) => {
            return res;
        });
}

export const getArtist = async (data) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-music1.p.rapidapi.com/v2/get_artist',
        params: { artist_id: data },
        headers: {
            'X-RapidAPI-Key': '25ad1acd4bmsh231760e1d383b49p193ebajsnea5fa13b96df',
            'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
        }
    };

    return await axios.request(options)
        .then((res) => {
            return res;
        })
}