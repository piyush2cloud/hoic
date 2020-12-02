import React, { useState, useEffect } from 'react';
import './styles.css';
import { PlayIcon, PlusIcon } from '../Icons';

export default function VideoTile({
  gist,
  variant = 'short',
  ageRestriction,
  featureText,
  color,
  s,
}) {
  const variantToSize = {
    short: '_16x9',
    long: '_9x16',
    cube: '_1x1',
    circle: '_1x1',
    genre: '_16x9',
    'extra-wide': '_32x9',
    landscape: '_16x9',
    portrait: '_9x16',
  };

  const sizes = {
    landscape: '_16x9',
    portrait: '_9x16',
  };

  const imageRatioForSmallSizeLoading = {
    _16x9: 1.77,
    _9x16: 0.56,
    _1x1: 1,
    _32x9: 3.55,
  };

  const size = s.thumbnailType;
  console.log('size', size, variantToSize[size]);

  const shortOrlong =
    gist && gist.imageGist[variantToSize[size]] ? 'short' : 'long';

  const imageUrl =
    gist &&
    (gist.imageGist[variantToSize[size]] ||
      gist.imageGist[variantToSize[variant]]);
  // const imageUrl = gist && gist.imageGist[];

  return (
    <div className="video-tile-container">
      <div className={`video-tile-wrapper video-tile-${shortOrlong}`}>
        <div
          className="video-tile-parent"
          style={{
            backgroundImage: `url(${imageUrl}), linear-gradient(#212121, #212121)`,
          }}
        >
          {featureText && (
            <div className="video-tile-new-label">{featureText}</div>
          )}
          <div className="video-tile-progress" />
          <div className="video-tile-long-hover-info-container">
            <div className="video-tile-long-hover-title-action-container">
              <div
                className={`video-tile-long-hover-title ${gist && gist.title}`}
              >
                {gist ? gist.title : ''}
              </div>
              <div className="video-tile-long-hover-action-container">
                <div className="video-tile-long-hover-play-icon-container">
                  <PlayIcon />
                </div>
                <div className="video-tile-long-hover-plus-icon-container">
                  <PlusIcon />
                </div>
              </div>
            </div>
            <ul className="video-tile-long-hover-feature-list">
              {ageRestriction && (
                <li className="video-tile-long-hover-feature-item video-tile-age-rating">
                  {ageRestriction}
                </li>
              )}
              {gist && gist.runtime && (
                <li className="video-tile-long-hover-feature-item">
                  {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                  {Math.round(gist.runtime / 60)} mins
                </li>
              )}
              {gist && gist.year && (
                <li className="video-tile-long-hover-feature-item">
                  {gist.year}
                </li>
              )}
              {gist && gist.primaryCategory && gist.primaryCategory.title && (
                <li className="video-tile-long-hover-feature-item">
                  {gist.primaryCategory.title}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="video-tile-info">
          <div className="video-tile-action-container">
            <div
              className="video-tile-title"
              style={{ '--genre-color': color ? `${color}6b` : '#b71c1c6b' }}
            >
              {gist ? gist.title : ''}
              {ageRestriction && (
                <div className="video-tile-age-rating">{ageRestriction}</div>
              )}
            </div>
            <div className="video-tile-icon-container">
              <div className="video-tile-play-icon video-tile-icon">
                <PlayIcon />
              </div>
              <div className="video-tile-plus-icon video-tile-icon">
                <PlusIcon />
              </div>
            </div>
          </div>
          <ul className="video-tile-feature-list">
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            {gist && gist.runtime && (
              <li>{Math.round(gist.runtime / 60)} mins</li>
            )}
            {gist && gist.year && <li>{gist.year}</li>}
            {gist && gist.primaryCategory && gist.primaryCategory.title && (
              <li>{gist.primaryCategory.title}</li>
            )}
          </ul>
          {gist && (
            <div className="video-tile-description">{gist.description}</div>
          )}
        </div>
      </div>
    </div>
  );
}
