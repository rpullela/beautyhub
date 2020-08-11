import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Wall from '../Wall';
import { ArticleWallInterface } from './models';
import { getSearchUrlWithTagsAndCategory } from '../../helpers/searchUrl';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import BlockContent from '@sanity/block-content-to-react';
import useStyles from './styles';

const ArticleWall: FunctionComponent<ArticleWallInterface> = ({
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
        spaceBetween: 60,
      },
      320: {
        slidesPerView: 2.1,
        spaceBetween: 50,
      },
    },
  };

  return (
    <div className={classes.wall}>
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
      <Wall
        type="tile"
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
      <div className={classes.articleNav}>
        {searchCtaLabel && (
          <Link
            className={classes.sectionLink}
            to={getSearchUrlWithTagsAndCategory(searchTags)}
          >
            {searchCtaLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ArticleWall;
