import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { WallInterface } from './models';
import { urlFor } from '../../helpers/imageUrl';
import useStyles from './styles';
import { ReactComponent as PlayVideo } from '../../images/icons/play.svg';
import './slider.scss';

const Wall: FunctionComponent<WallInterface> = ({
  type,
  slides,
  spaceBetween,
  slidesPerView,
  speed,
  threshold,
  lazy,
  preloadImages,
  freeMode,
  watchSlidesVisibility,
  breakpoints,
}) => {
  const classes = useStyles();

  const renderTileWallSlides = slide => {
    return (
      <div>
        <Link className={classes.wallLink} to={slide.path}>
          <div className={classes.heroImage}>
            <figure>
              <picture
                className="bp-image__placeholder"
                style={{
                  paddingTop: '100%',
                  background: `url(${slide._rawHeroImage.asset.metadata.lqip})`,
                  backgroundSize: 'cover',
                }}
              >
                <source
                  media="screen and (min-width: 560px)"
                  srcSet={`${urlFor(slide._rawHeroImage)
                    .width(280)
                    .height(280)
                    .fit('max')
                    .auto('format')
                    .url()
                    .toString()}`}
                />
                <source
                  media="screen and (min-width: 320px)"
                  srcSet={`${urlFor(slide._rawHeroImage)
                    .width(160)
                    .height(160)
                    .fit('max')
                    .auto('format')
                    .url()
                    .toString()}`}
                />
                <img
                  src={urlFor(slide._rawHeroImage)
                    .width(280)
                    .height(280)
                    .fit('max')
                    .url()}
                  alt={slide.heroImage.alt}
                />
              </picture>
            </figure>
            {slide.A}
            {slide.heroVideo && (
              <span className={`icon ${classes.iconPlay}`}>
                <PlayVideo />
                <span hidden>Play Video</span>
              </span>
            )}
          </div>
          <div className={classes.tileCard}>
            <h3 className={classes.wallItemCaption}>
              <span>{slide.headline}</span>
            </h3>
          </div>
        </Link>
      </div>
    );
  };

  const renderProductWallSlides = slide => {
    return (
      <div>
        <Link
          className={classNames(classes.wallLink, classes.textCenter)}
          to={slide.path}
        >
          <div className={classes.heroImage}>
            <figure>
              <picture
                className="bp-image__placeholder"
                style={{
                  paddingTop: '100%',
                  background: `url(${slide._rawImage.asset.metadata.lqip})`,
                  backgroundSize: 'cover',
                }}
              >
                <source
                  media="screen and (min-width: 560px)"
                  srcSet={`${urlFor(slide._rawImage)
                    .width(280)
                    .height(280)
                    .fit('max')
                    .auto('format')
                    .url()
                    .toString()}`}
                />
                <source
                  media="screen and (min-width: 320px)"
                  srcSet={`${urlFor(slide._rawImage)
                    .width(160)
                    .height(160)
                    .fit('max')
                    .auto('format')
                    .url()
                    .toString()}`}
                />
                <img
                  src={urlFor(slide._rawImage)
                    .width(280)
                    .height(280)
                    .fit('max')
                    .url()}
                  alt={slide.image.alt}
                />
              </picture>
            </figure>
          </div>
          <h3 className={classes.wallItemCaption}>
            <span>{slide.name}</span>
          </h3>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div>
        <Wall
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          speed={speed}
          threshold={threshold}
          lazy={lazy}
          preloadImages={preloadImages}
          freeMode={freeMode}
          watchSlidesVisibility={watchSlidesVisibility}
          {...breakpoints}
        >
          {slides.map((slide: any) => {
            return type === 'tile'
              ? renderTileWallSlides(slide)
              : renderProductWallSlides(slide);
          })}
        </Wall>
      </div>
    </>
  );
};

export default Wall;
