import React from 'react';
import './styles.css';
import MovieImage from '../../assets/images/movie-popup-img.jpg';

export default function index() {
  return (
    <div className="video-details-page-container">
      <div className="video-details-page-wrapper">
        <div className="video-details-page-parent">
          <div
            className="video-details-page-image"
            style={{ backgroundImage: `url(${MovieImage})` }}
          >
            <div className="video-details-page-details-container">
              <span className="video-details-page-badge">
                EXCLUSIVE RELEASE
              </span>
              <div
                className="video-details-page-title"
                onClick={() => {
                  onTitleClick ? onTitleClick() : null;
                }}
              >
                {slideData.gist.title}
              </div>
              <div className="video-details-page-feature-list-container">
                <div className="video-details-page-age-rating">13+</div>
                <ul className="video-details-page-feature-list-item">
                  {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                  {slideData.gist.runtime && (
                    <li>{Math.round(slideData.gist.runtime / 60)} mins</li>
                  )}
                  {slideData.gist.year && <li>{slideData.gist.year}</li>}
                  {slideData.categories[0] && (
                    <li>{slideData.categories[0].title}</li>
                  )}
                </ul>
              </div>
              <div className="video-details-page-action-container">
                <div className="video-details-page-cta-container">
                  <button
                    className="primary-button video-details-page-cta video-details-page-play-icon-container"
                    type="button"
                  >
                    <PlayIcon />
                    <span className="">Play Now</span>
                  </button>
                </div>

                <div className="video-details-page-info-icon-container">
                  <button
                    className="secondary-button video-details-page-secondary-icon video-details-page-info-icon"
                    type="button"
                  >
                    <InfoIcon />
                  </button>
                </div>
                <div className="video-details-page-add-icon-container">
                  <button
                    className="secondary-button video-details-page-secondary-icon"
                    type="button"
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
              <div className="video-details-page-description">
                A game of tunes - or a clue to a hidden treasure? It&apos;s a
                <br />
                journey of music and riddles!
                <br />
                Watch the trailer of Tansener Tanpura.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
