/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import './_item-details-view.scss';

function ItemDetailsView({ title, price, description, url, imgUrl, videos }) {
  return (
    <div className="container">
      <div>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <p>{description}</p>
        <p>{url}</p>
        <p>{imgUrl}</p>
      </div>
      <div>
        {videos.map((v) => (
          <div className="responsive-video">
            <iframe
              title="video_vimeo"
              src={v}
              width="853"
              height="479"
              frameBorder="0"
              allowFullScreen
              webkitallowfullscreen=""
              mozallowfullscreen=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ItemDetailsView.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number,
  description: PropTypes.string,
  url: PropTypes.string,
  imgUrl: PropTypes.string,
  videos: PropTypes.arrayOf(PropTypes.string),
};

ItemDetailsView.defaultProps = {
  price: 0,
  description: '',
  url: '',
  imgUrl: '',
  videos: [],
};

export default ItemDetailsView;
