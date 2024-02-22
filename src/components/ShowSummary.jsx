
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';

const ShowSummary = () => {
    const [Details, setDetails] = useState('');
    const [showModal, setShowModal] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then(response => response.json())
            .then(data => setDetails(data))
            .catch(error => console.error('Error fetching Details:', error));
    }, [id]);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const showData = {
        
    };
    console.log(Details,'Details');

    return (
        <div style={{ width: "100%" }}>
            <h2>Show Summary</h2>

            {Details && <div className='container'>
                <div className="row">
                    <div className='col-md-12 border rounded p-4 w-100' key={Details.id}>
                        <img src={Details.image?.original} alt={Details.name} className='image-fluid rounded imageOriginal' />
                        <p >Name: {Details.name}</p>
                        <p>Language: {Details.language}</p>
                        <p>Genres: {Details.genres.join(', ')}</p>
                        <p>Rating: {Details.rating.average}</p>
                        <hr />
                        <div>
                            <div className='fw-bold'>Summary:</div>
                            <div dangerouslySetInnerHTML={{ __html: Details.summary }} />
                        </div>
                        <button onClick={toggleModal}>Book Ticket</button>
                    </div>
                </div>
            </div>}

            
            {showModal && 
              <div className="modal-container">
                <div className="modal-content">
                  <BookingForm 
                    show={showData} 
                    movieName={Details.name} 
                    movieId={Details.id} 
                    showModal={showModal} 
                    closeModal={toggleModal} 
                  />
                </div>
              </div>
            }
        </div>
    );
};

export default ShowSummary;
