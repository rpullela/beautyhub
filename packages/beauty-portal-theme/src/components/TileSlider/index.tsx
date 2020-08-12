import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Slider from '../Slider';
import { TileSliderInterface } from './models';
import { getSearchUrlWithTagsAndCategory } from '../../helpers/searchUrl';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import useStyles from './styles';

const TileSlider: FunctionComponent<TileSliderInterface> = ({
  slides,
  headline,
  _rawTextBlockBody,
  searchCtaLabel,
  searchTags,
}) => {
  const classes = useStyles();
  const breakpoints = {
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <div className={classes.slider}>
      <div className={classes.sectionDivider}></div>
      <div className={classes.sectionTitle}>
        {headline && <h2 className={classes.sliderTitle}>{headline}</h2>}
      </div>
      <div className={classes.sectionDescription}>
        {_rawTextBlockBody && (
          <BlockContent
            serializers={blockTypeDefaultSerializers}
            blocks={_rawTextBlockBody}
          />
        )}
      </div>
      <div className={classes.productNav}>
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
        type="product"
        slides={slides}
        spaceBetween={30}
        slidesPerView={4}
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

export default TileSlider;
