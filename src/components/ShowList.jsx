
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log(shows,"shows");

  return (
    <div className='mx-auto border p-4 mt-4'>
      <h1 className=''>TV Shows</h1>
      <div className='container d-flex justify-content-center'>
        <div className="row gap-4 ">
          {shows && shows.map((show) => (
            <div className='col-md-3 border rounded p-4 ' key={show.show.id}>
                <Link to={`/show/${show.show.id}`}>
              <div className='imageDiv'>

                <img src={show.show.image?.medium} alt={show.show?.name} className='image-fluid rounded '/>
              </div>
              
                <p >Name: {show.show.name}</p>
                <p>Language: {show.show.language}</p>
                <p>Genres: {show.show.genres.join(', ')}</p>
                <p>Rating: {show.show.rating.average}</p>
                {/* Add other fields you want to display */}
                <hr />
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowList;
