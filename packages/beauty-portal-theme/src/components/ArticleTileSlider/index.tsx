import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Slider from '../Slider';
import { ArticleTileSliderInterface } from './models';
import { getSearchUrlWithTagsAndCategory } from '../../helpers/searchUrl';
import useStyles from './styles';

const ArticleTileSlider: FunctionComponent<ArticleTileSliderInterface> = ({
  slides,
  headline,
  searchCtaLabel,
  searchTags,
}) => {
  const classes = useStyles();
  const breakpoints = {
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 70,
      },
      320: {
        slidesPerView: 2.1,
        spaceBetween: 50,
      },
    },
  };

  return (
    <div className={classes.slider}>
      <div className={classes.sectionTitle}>
        {headline && <h2 className={classes.sliderTitle}>{headline}</h2>}
        {searchCtaLabel && (
          <Link
            className={classes.sectionLink}
            to={getSearchUrlWithTagsAndCategory(searchTags)}
          >
            {searchCtaLabel}
          </Link>
        )}
      </div>
      <Slider
        type="tile"
        slides={slides}
        spaceBetween={30}
        slidesPerView={3}
        speed={700}
        threshold={5}
        lazy={true}
        preloadImages={false}
        freeMode={true}
        watchSlidesVisibility={true}
        breakpoints={breakpoints}
      />
    </div>
  );
};

export default ArticleTileSlider;
