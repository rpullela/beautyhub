import React, { FunctionComponent, useState } from 'react';
import SwiperCore, { Thumbs, Navigation, Pagination, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.scss';
import { urlFor } from '../../helpers/imageUrl';
import PageSchema from '../PageSchema';
import useStyles from './styles';

SwiperCore.use([Thumbs, Navigation, Pagination, Lazy]);

const Gallery: FunctionComponent<GalleryInterface> = ({
  data,
  slug,
  name,
  authorName,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const classes = useStyles();
  return (
    <>
      <PageSchema type={'ImageGallery'} {...{ name, slug, data, authorName }} />
      <div className={classes.galleryWrapper}>
        <Swiper
          spaceBetween={10}
          slidesPerView={8}
          freeMode={true}
          watchSlidesVisibility={true}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
          lazy={true}
        >
          {data.picture.map((picture: any) => (
            <SwiperSlide key={picture.asset._id}>
              <figure>
                <picture
                  className="bp-image__placeholder"
                  style={{
                    paddingTop: '100%',
                    background: `url(${picture.asset.metadata.lqip})`,
                    backgroundSize: 'cover',
                  }}
                >
                  <source
                    media="screen and (min-width: 1025px)"
                    srcSet={`${urlFor(picture)
                      .width(80)
                      .height(80)
                      .fit('max')
                      .auto('format')
                      .url()
                      .toString()}`}
                  />
                  <source
                    media="screen and (min-width: 320px)"
                    srcSet={`${urlFor(picture)
                      .width(40)
                      .height(40)
                      .fit('max')
                      .auto('format')
                      .url()
                      .toString()}`}
                  />
                  <img
                    src={urlFor(picture)
                      .width(80)
                      .height(80)
                      .fit('max')
                      .auto('format')
                      .url()}
                    alt={picture.alt}
                  />
                </picture>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={0}
          thumbs={{ swiper: thumbsSwiper }}
          pagination={{ clickable: true }}
          navigation
          lazy={true}
          watchSlidesVisibility={false}
        >
          {data.picture.map((picture: any) => (
            <SwiperSlide key={picture.asset._id}>
              <figure>
                <picture
                  className="bp-image__placeholder"
                  style={{
                    paddingTop: '100%',
                    background: `url(${picture.asset.metadata.lqip})`,
                    backgroundSize: 'cover',
                  }}
                >
                  <source
                    media="screen and (min-width: 1025px)"
                    srcSet={`${urlFor(picture)
                      .width(500)
                      .height(500)
                      .fit('max')
                      .auto('format')
                      .url()
                      .toString()}`}
                  />
                  <source
                    media="screen and (min-width: 320px)"
                    srcSet={`${urlFor(picture)
                      .width(414)
                      .height(414)
                      .fit('max')
                      .auto('format')
                      .url()
                      .toString()}`}
                  />
                  <img
                    src={urlFor(picture)
                      .width(500)
                      .height(500)
                      .fit('max')
                      .auto('format')
                      .url()}
                    alt={picture.alt}
                  />
                </picture>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

interface GalleryInterface {
  data: any;
  slug?: string;
  name?: string;
  authorName?: string;
}
export default Gallery;
