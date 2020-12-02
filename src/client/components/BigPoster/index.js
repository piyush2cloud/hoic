import React, { useState, useEffect } from 'react';
import './styles.css';
import { PlayIcon, InfoIcon, PlusIcon } from '../Icons';

export default function BigPoster({
  gist,
  feturedText,
  s,
  variant = 'default',
}) {
  const variantToSize = {
    default: '_16x9',
    'new-release': '_32x9',
    series: '_16x9',
    'original-series': '_16x9',
    landscape: '_16x9',
    portrait: '_9x16',
  };
  const imageRatioForSmallSizeLoading = {
    _16x9: 1.77,
    _9x16: 0.56,
    _1x1: 1,
    _32x9: 3.55,
  };

  // console.log(s);
  // const size = s.thumbnailType;
  // console.log('size', size, variantToSize[size]);

  // const shortOrlong = s.thumbnailType === 'landscape' ? 'short' : 'long';
  // gist && gist.imageGist[variantToSize[size]] ? 'short' : 'long';

  // const imageUrl =
  //   gist &&
  //   (gist.imageGist[variantToSize[size]] ||
  //     gist.imageGist[variantToSize[variant]]);

  const imageUrl = gist && gist.imageGist[variantToSize[variant]];

  return (
    <div className={`big-poster-container big-poster-${variant}`}>
      <div className="big-poster-wrapper">
        <div className="big-poster-parent">
          <div
            className="big-poster-img-container"
            style={{
              backgroundImage: `url(${imageUrl}), linear-gradient(#212121, #212121)`,
            }}
          />
          <div className="big-poster-info-container">
            {feturedText && (
              <div className="big-poster-featured-text primary-gradient">
                {feturedText}
              </div>
            )}
            {gist && gist.title && (
              <div className="big-poster-title">{gist.title}</div>
            )}
            <div className="big -poster-feature">
              <ul className="big-poster-feature-list">
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                {gist && gist.runtime && (
                  <li>{gist && Math.round(gist.runtime / 60)} mins</li>
                )}
                {gist && gist.year && <li>{gist.year}</li>}
                {gist && gist.primaryCategory && gist.primaryCategory.title && (
                  <li>{gist.primaryCategory.title}</li>
                )}
              </ul>
            </div>
            <div className="big-poster-additional-info">
              <div className="big-poster-buttons">
                <div className="big-poster-play-button">
                  <div className="big-poster-play-icon">
                    <PlayIcon />
                  </div>
                  <div className="big-poster-play-text">Play Now</div>
                </div>
                <div className="big-poster-info-button">
                  <div className="big-poster-info-icon">
                    <InfoIcon />
                  </div>
                </div>
                <div className="big-poster-plus-button">
                  <div className="big-poster-plus-icon">
                    <PlusIcon />
                  </div>
                </div>
              </div>
              <div className="big-poster-description">
                A love story amdist agitation and crime... Find out about the
                fight to survive, during the Bangladesh freedom struggle.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
