import React, { useState, useEffect } from 'react';
import './styles.css';
import { PlayIcon, PlusIcon } from '../Icons';

export default function MoboCarousel({
  moduleData: { contentData: slidesDataArray },
}) {
  const [currentActiveElement, setCurrentActiveElement] = useState(0);
  const [selectedSlideData, setSelectedSlideData] = useState(null);

  const handleMoboCarousel = (slideIndex) => {
    setCurrentActiveElement(slideIndex);
    setSelectedSlideData(slidesDataArray[slideIndex]);
  };

  useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    if (slidesDataArray[0] && slidesDataArray[0].gist.imageGist._9x16) {
      // eslint-disable-next-line no-underscore-dangle
      setSelectedSlideData(slidesDataArray[0]);
    }
  }, []);

  return (
    <div className="mobo-carousel-container">
      <div className="mobo-carousel-wrapper">
        <div className="mobo-carousel-parent">
          <div
            className="mobo-carousel-active-image-container"
            // style={{
            //   backgroundImage: `linear-gradient(180deg, rgb(0 0 0 / 0.9) 10%, transparent 40%), linear-gradient(360deg, #000000 30%, transparent 40%), url(${
            //     selectedSlideData &&
            //     selectedSlideData.gist &&
            //     selectedSlideData.gist.imageGist &&
            //     selectedSlideData.gist.imageGist._9x16
            //   })`,
            //}}
          >
            <div className="mobo-carousel-active-image-info-container">
              <div className="mobo-carousel-active-play-icon">
                <PlayIcon />
              </div>
              <div className="mobo-carousel-active-info">
                <div className="mobo-carousel-heading">
                  {selectedSlideData &&
                    selectedSlideData.gist &&
                    selectedSlideData.gist.title}
                </div>
                <ul className="mobo-carousel-feature-list">
                  <li className="mobo-carousel-feature-item">2 Seasons</li>
                  <li className="mobo-carousel-feature-item">12 Episodes</li>
                  {selectedSlideData && selectedSlideData.categories[0] && (
                    <li className="mobo-carousel-feature-item">
                      {selectedSlideData.categories[0].title}
                    </li>
                  )}
                </ul>
              </div>
              <div className="mobo-carousel-active-plus-icon">
                <PlusIcon />
              </div>
            </div>
            <div className="mobo-carousel-indicator-container">
              <ul className="mobo-carousel-indicator-list">
                {slidesDataArray &&
                  slidesDataArray.map((slideData, index) => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    <li
                      key={new Date().getTime() + index}
                      className={`mobo-carousel-indicator-list-item ${
                        index === currentActiveElement ? 'active' : ''
                      }`}
                      onClick={() => {
                        handleMoboCarousel(index);
                      }}
                      role="button"
                    >
                      <img
                        // eslint-disable-next-line no-underscore-dangle
                        src={slideData.gist.imageGist._16x9}
                        alt=""
                        className="mobo-carousel-indicator-image"
                        // eslint-disable-next-line no-underscore-dangle
                        data-active-image={slideData.gist.imageGist._9x16}
                      />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
