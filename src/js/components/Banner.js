import React, { useState, useEffect} from 'react';
import requests from "../requests";
import axios from "../axios";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "../../css/app.css";

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);
    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header className="banner">
            <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="banner" className="banner__image"/>
            ifr
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button"><PlayArrowIcon className="banner__button-icon"/>Play</button>
                    <button className="banner__button"><InfoOutlinedIcon className="banner__button-icon"/>My List</button>
                </div>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
    
}

export default Banner;
