import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./row.css";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      // console.log(request);
      setMovies(request.data.results);
      // here request.data.results is an array
      return request;
    };

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
      origin: 'http://localhost:3000'
    },
  }

  const handleClick = (movie) => {
    // console.table(movie?.title)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }

  // console.log(movies);
  return (
    <div className="row">
      {/* title */}
      <h2 className="subHeads">{title}</h2>
      {/* container */}
      <div className="row_posters">
        {/* posters of movie */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`movieBox ${isLargeRow && "movieBox_Large"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}
