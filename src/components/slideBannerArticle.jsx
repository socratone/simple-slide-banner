import React from 'react';

import './slideBannerArticle.scss';

const SlideBannerArticle = ({ data }) => {
  return (
    <article
      className="slide-banner__article"
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      <div className="slide-banner__column1">
        <div className="slide-banner__column1-area">
          <h2 style={{ fontSize: '2rem', margin: 0 }}>제목을 지어주세요</h2>
          <p>부제목도 있어야 해요</p>
          <button
            style={{
              padding: '0.7rem',
              backgroundColor: 'dodgerblue',
              border: 0,
              borderRadius: '0.25rem',
              outline: 'none',
            }}
          >
            더 알아보기
          </button>
        </div>
      </div>
      <div className="silde-banner__column2">
        <div className="silde-banner__column2-area">
          <i class="fab fa-react"></i>
        </div>
      </div>
      <ul className="slide-banner__column3">
        <div>
          <li>잘 지내세요</li>
          <li>만나서 반가워요</li>
          <li>얼마나 오래됐나요</li>
          <li>밥은 먹고 다녀요</li>
        </div>
      </ul>
    </article>
  );
};

export default SlideBannerArticle;
