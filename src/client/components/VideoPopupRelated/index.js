import React from 'react';
import './styles.css';
import VideoTile from '../VideoTile';

export default function VideoPopupRelated({ moduleData, variant = 'short' }) {
  const { contentData: tiles, title } = moduleData;

  return (
    <div>
      <div className="video-popup-related-container">
        <div className="video-popup-related-wrapper">
          <div className="video-popup-related-parent">
            <div className="video-popup-related-title">
              Related to this title
            </div>
            <div className="video-popup-related-video-tiles">
              {tiles && tiles.map((tile, index) => (
                <VideoTile
                  // eslint-disable-next-line react/no-array-index-key
                  key={`video-popup-related-${index}-${variant}`}
                  {...{ ...tile, variant }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
