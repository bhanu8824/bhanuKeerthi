import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="main-container">
      <section className="section">
        <h1 className="mb-0 heading">We Got ENGAGED!</h1>
        <img src="ring.png" alt="ring" className='ring-image mb-0' />
        <a href="#photo" className="buttonScrol">Scroll to See the Moment ↓</a>
      </section>

      <section id="photo" className="section photo-section d-flex flex-column justify-content-center align-items-center text-center">
      <p className="text-white mt-3">BHANU</p>
      <p className="text-white mt-3">KEERTHI</p>
      <p className="text-white mt-3">A special Chapter of my life began...and I can't wait to share it with you all!</p>
        <img src="photo.jpeg" alt="Engagement" className="img-fluid rounded-4 shadow-lg mb-3" style={{ maxWidth: '90%', maxHeight: '500px' }} />
      </section>  

      <section id="photo" className="photo-section1 d-flex flex-column justify-content-center align-items-center">
        {/* <img src="photo.jpeg" alt="Engagement" className="img-fluid rounded-4 shadow-lg mb-3" style={{ maxWidth: '90%', maxHeight: '500px' }} /> */}
      </section>
    </div>
  );
}

export default App;
