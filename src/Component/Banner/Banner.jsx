import React, { useEffect } from 'react'
import { API_KEY, imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'
import { useState } from 'react'


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data.results[0]);
            setMovie(response.data.results[0])
            // const responseData = response.data.results;
            // const randomIndex = Math.floor(Math.random() * responseData.length);
            // console.log(responseData[randomIndex]);
            // setMovie(responseData[randomIndex]);
        })
    }, [])

    return (
        <div
            style={{ backgroundImage: `url(${movie ? imageUrl + movie?.backdrop_path : ""})` }}
            className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie?.original_name : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='discription'>{movie ? movie?.overview : ""}</h1>
            </div>
            <div className="fade_bottom">

            </div>
        </div>
    )
}

export default Banner
