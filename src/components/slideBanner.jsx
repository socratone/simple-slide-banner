import React from 'react';

import slideBannerData from '../lib/slideBannerData';
import './slideBanner.scss';
import './constantRatio.scss';

const SlideBanner = () => {
	return (
		<section className="slide-banner-section">
			<div className="constant-ratio-parent">
				<div className="constant-ratio-child">
					<article className="slide-banner-article" style={{ backgroundImage: `url(${slideBannerData[0].image})` }}>

					</article>
				</div>
			</div>
		</section>
	);
};

export default SlideBanner;