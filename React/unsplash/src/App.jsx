import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/?client_id=FofL10STVW2_kvw_lK00lExlDwdX2iwcbHngGIQF_dA');
        setPhotos(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const changeBackgroundImage = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Photos from Unsplash</h1>
      <div 
        style={{
          backgroundImage: `url(${photos[currentPhotoIndex].urls.small})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          objectFit: 'cover'
        }}
        className='imag'
      >
        <button onClick={changeBackgroundImage}>Change Background</button>
        {photos.map(photo => (
          <div key={photo.id}>
            <img src={photo.urls.small} alt={photo.alt_description} />
            <p>By: {photo.user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
