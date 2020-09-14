import React from 'react';
import './css/app.css';
import Row from "./js/components/Row";
import Banner from "./js/components/Banner";
import Navigation from "./js/components/Navigation";
import request from "./js/requests";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies}/>
      {/* <Row title="Documentaries" fetchUrl={request.fetchDocumentaries}/> */}
    </div>
  );
}

export default App;
