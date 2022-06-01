import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../request";
import './Banner.css'

export default function Banner() {
  const [movie, setMovie] = useState([]);

  function truncate(str, n)
  {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  useEffect(() => {
    async function fetchData() {
      // const request = await axios.get(requests.fetchNetFlixOriginals);
      const request = await axios.get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=9927d57067753126d627ab0540ed625a"
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  // https://image.tmdb.org/t/p/original/8H64YmIYxpRJgSTuLUGRUSyi2kN.jpg

  //   https://image.tmdb.org/t/p/original/${movie.backdrop_path}

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')`,
        color: "white",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        {/* background image */}

        {/* title */}
        <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>
        {/* div>2 buttons */}
        <div className="banner-buttons-area">
          <button className="banner-button btn1">Play</button>
          <button className="banner-button btn2">My List</button>
        </div>
        {/* description  */}
        <div className="banner-descrip">
          truncate({movie?.overview},150)
        </div>
      </div>
      {/* fader */}
      <div className="fade">  
      </div>
    </header>
  );
}
