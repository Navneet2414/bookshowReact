import React, { useState } from 'react';

const BookingForm = ({  closeModal ,movieName,movieId}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('bookingDetails', JSON.stringify({ ...formData, movieName,movieId }));
    closeModal();
    alert("Movie has been booked.")
    setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: ''
      })
  };

  return (
    <div id="bookingModal" className='modals border p-4 w-50 '>
      
          <div className="modal-header">
            <h5 className="modal-title">Book Ticket</h5>
            <button type="button" className="btn-close" onClick={closeModal}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-2">
                <label htmlFor="firstName" className="form-label">Movie Id</label>
                <input type="text" className="form-control" id="firstName" name="firstName" disabled="true" value={movieId} 
               required />
              </div>
              <div className="mb-2">
                <label htmlFor="firstName" className="form-label">Movie Name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={movieName} disabled="true" onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="mb-2">
                <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
      
    </div>
  );
};

export default BookingForm;
