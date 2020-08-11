import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { Typography } from '@material-ui/core';
import SwiperCore, { Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
import { SliderInterface } from './models';
import { urlFor } from '../../helpers/imageUrl';
import useStyles from './styles';
import { ReactComponent as Next } from '../../images/icons/next.svg';
import { ReactComponent as PlayVideo } from '../../images/icons/play.svg';
import './slider.scss';

SwiperCore.use([Lazy]);

const Slider: FunctionComponent<SliderInterface> = ({
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
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '5px 0px',
  });
  const classes = useStyles();
  const [swiper, updateSwiper] = useState(null);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const swiperNext = () => {
    if (swiper) {
      swiper.slideNext();
      setIsFirstSlide(false);
      if (swiper.isEnd) {
        setIsLastSlide(true);
      }
    }
  };

  const swiperPrev = () => {
    if (swiper) {
      swiper.slidePrev();
      setIsLastSlide(false);
      if (swiper.isBeginning) {
        setIsFirstSlide(true);
      }
    }
  };

  const renderTileSlides = slide => {
    return (
      <SwiperSlide key={slide.headline}>
        <div>
          {slide._type && (
            <span className={classes.tileSlideType}>{slide._type}</span>
          )}
          <Link className={classes.sliderLink} to={slide.path}>
            <div className={classes.heroImage}>
              <figure>
                {inView ? (
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
                ) : null}
              </figure>
              {slide.heroVideo && (
                <span className={`icon ${classes.iconPlay}`}>
                  <PlayVideo />
                  <span hidden>Play Video</span>
                </span>
              )}
            </div>
            <h3 className={classes.sliderItemCaption}>
              <span>{slide.headline}</span>
            </h3>
          </Link>
        </div>
      </SwiperSlide>
    );
  };

  const renderProductSlides = slide => {
    return (
      <SwiperSlide key={slide.headline}>
        <div>
          <Link
            className={classNames(classes.sliderLink, classes.textCenter)}
            to={slide.path}
          >
            <div className={classes.heroImage}>
              <figure>
                {inView ? (
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
                ) : null}
              </figure>
            </div>
            <h3 className={classes.sliderItemCaption}>
              <span>{slide.name}</span>
            </h3>
          </Link>
        </div>
      </SwiperSlide>
    );
  };

  const renderHeroSlides = slide => (
    <SwiperSlide key={slide.path}>
      {slide.heroImage && (
        <figure>
          <picture
            className="bp-image__placeholder"
            style={{
              paddingTop: '56.25%',
              background: `url(${slide._rawHeroImage.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
          >
            <img
              data-srcset={`${urlFor(slide._rawHeroImage)
                .width(414)
                .height(232)
                .fit('max')
                .auto('format')
                .quality(80)
                .url()
                .toString()} 414w,
                      ${urlFor(slide._rawHeroImage)
                        .width(752)
                        .height(423)
                        .quality(80)
                        .fit('max')
                        .auto('format')
                        .url()
                        .toString()} 752w`}
              alt={slide.heroImage.alt}
              className="swiper-lazy"
            />
          </picture>
        </figure>
      )}
      {type === 'hero' && (
        <div className={classes.copy}>
          <div className={classes.copyInner}>
            <div className={classes.slideType}>{slide._type}</div>
            <Typography variant="h2" className={classes.heading}>
              {slide.headline}
            </Typography>
            <Link className={classes.callToAction} to={slide.path}>
              Go to Article
            </Link>
          </div>
        </div>
      )}
    </SwiperSlide>
  );
  return (
    <>
      <div
        className={classNames(
          classes.sliderWrapper,
          type === 'hero' ? classes.pb20 : null
        )}
        ref={ref}
        data-inview={inView}
      >
        <button
          className={classNames(classes.navigationButton, classes.nextButton)}
          type="button"
          onClick={swiperNext}
          disabled={isLastSlide}
        >
          <Next />
          <span className="srOnly">Next</span>
        </button>
        <Swiper
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          speed={speed}
          threshold={threshold}
          onSwiper={updateSwiper}
          lazy={lazy}
          preloadImages={preloadImages}
          freeMode={freeMode}
          watchSlidesVisibility={watchSlidesVisibility}
          {...breakpoints}
        >
          {slides.map((slide: any) => {
            return type === 'hero'
              ? renderHeroSlides(slide)
              : type === 'tile'
              ? renderTileSlides(slide)
              : renderProductSlides(slide);
          })}
        </Swiper>
        <button
          className={classNames(classes.navigationButton, classes.prevButton)}
          type="button"
          onClick={swiperPrev}
          disabled={isFirstSlide}
        >
          <Next />
          <span className="srOnly">Prev</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
