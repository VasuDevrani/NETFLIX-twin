import './App.css';
import React from 'react';
import Row from './component/Row';
import requests from './request';
import Banner from './component/Banner';
import Nav from './component/Nav';

function App() {

  return (
    <div className="App">
      {/* navbar */}
      <Nav/>
      {/* banner */}
      <Banner/>
      {/* movies */}
      <Row title="NETFLIX ORIGINALS" isLargeRow = {true} fetchUrl={requests.fetchActionMovies}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  ); 
}

export default App;
