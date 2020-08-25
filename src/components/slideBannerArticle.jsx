import React from 'react';

const SlideBannerArticle = ({ data }) => {
  return (
    <article
      className="slide-banner__article"
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    />
  );
};

export default SlideBannerArticle;
