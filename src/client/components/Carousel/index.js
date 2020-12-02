import React, { useEffect, useState } from 'react';
import CarouselSlide from '../CarouselSlide';
import VideoDetailsPopup from '../VideoDetailsPopup';
import './styles.css';

export default function Carousel({ moduleData }) {
  if (!moduleData) return null;

  const { contentData: slidesDataArray } = moduleData;

  const carousel = React.createRef();
  const [carouselTimmer, setCarouselTimmer] = useState(0);
  const timer = () => setCarouselTimmer((prevTime) => prevTime + 1);
  const initCar = 0;
  let timerId = null;
  const carouselTimer = 6000;
  const [showMoviePopup, setShowMoviePopup] = useState(false);

  useEffect(() => {
    // console.log('change slide');
    const carouselClasses = ['first-slide', 'second-slide'];
    const carouselNode = carousel.current;
    const carouselFirstItem = [
      ...carouselNode.getElementsByClassName('first-slide'),
    ];
    const carouselSecondItem = [
      ...carouselNode.getElementsByClassName('second-slide'),
    ];
    const carouselItems = [...carouselNode.children];

    if (carouselSecondItem[0] !== undefined) {
      carouselFirstItem[0].classList.remove(carouselClasses[0]);
      carouselSecondItem[0].classList.remove(carouselClasses[1]);
      carouselSecondItem[0].classList.add(carouselClasses[0]);
      if (carouselSecondItem[0].nextSibling) {
        carouselSecondItem[0].nextSibling.classList.add(carouselClasses[1]);
      } else {
        carouselItems[0].classList.add(carouselClasses[1]);
      }
    } else {
      // empty
    }

    timerId = setTimeout(timer, carouselTimer);

    return () => {
      clearTimeout(timerId);
    };
  }, [carouselTimmer]);

  useEffect(() => {
    function initCarousel() {
      const carouselClasses = ['first-slide', 'second-slide'];
      const carouselNode = carousel.current;
      // console.log(carouselNode);
      const carouselItems = [...carouselNode.children];
      //   console.log(carouselItems);
      carouselItems.forEach((carouselItem, index) => {
        if (index >= carouselClasses.length) {
          return;
        }

        carouselItem.classList.add(carouselClasses[index]);
      });
    }
    initCarousel();
  }, [initCar]);

  const carouselOnMouseOver = () => {
    if (timerId) {
      clearTimeout(timerId);
    }
  };

  const carouselOnMouseLeave = () => {
    timerId = setTimeout(timer, carouselTimer);
  };

  const titleClickHandler = () => {
    setShowMoviePopup(true);
  };

  return (
    <div>
      <div className="carousel-parent">
        <div
          className="carousel-mask"
          ref={carousel}
          onMouseOver={carouselOnMouseOver}
          onMouseLeave={carouselOnMouseLeave}
        >
          {slidesDataArray &&
            slidesDataArray.map((slideData, index) => (
              <CarouselSlide
                slideData={slideData}
                key={`${index}-carousel-slide`}
                onTitleClick={titleClickHandler}
              />
            ))}
        </div>
      </div>
      {showMoviePopup && (
        <VideoDetailsPopup
          videoDeatilsData={slidesDataArray}
          openVideoPopup={showMoviePopup}
          onVideoPopupClosed={setShowMoviePopup}
        />
      )}
    </div>
  );
}
