import React from 'react';
import './Videos.css';

const videoData = [
  {
    id: 'dQw4w9WgXcQ', // Example video ID (Rick Astley)
    title: 'Understanding E-commerce Growth',
  },
  {
    id: '3tmd-ClpJxA', // Example video ID (SpaceX)
    title: 'Our AI in Action',
  },
  {
    id: 'vO_Ie3kMXbY', // Example video ID (Nature)
    title: 'Client Success Story',
  },
];

const Videos = () => {
  return (
    <div className="videos-section">
      <h2 className="videos-section-title">Learn More About Us</h2>
      <div className="videos-container">
        {videoData.map((video) => (
          <div className="video-wrapper" key={video.id}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
