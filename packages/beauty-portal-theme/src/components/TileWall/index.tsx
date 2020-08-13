import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Wall from '../Wall';
import { TileWallInterface } from './models';
import { getSearchUrlWithTagsAndCategory } from '../../helpers/searchUrl';
import useStyles from './styles';

const TileWall: FunctionComponent<TileWallInterface> = ({
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
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <div className={classes.wall}>
      <div className={classes.sectionTitle}>
        {headline && <h2 className={classes.wallTitle}>{headline}</h2>}
        {searchCtaLabel && (
          <Link
            className={classes.sectionLink}
            to={getSearchUrlWithTagsAndCategory(searchTags)}
          >
            {searchCtaLabel}
          </Link>
        )}
      </div>
      <Wall
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

export default TileWall;
