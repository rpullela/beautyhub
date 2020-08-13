import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import { urlFor } from '../../helpers/imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import { ImageBlockInterface } from './models';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';

import useStyles from './styles';

const ImageBlock: FunctionComponent<ImageBlockInterface> = ({
  name,
  image,
  _rawTextBlockBody,
  _rawImage,
  url,
  imageBlockType,
  preferPerformance = false,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  const classes = useStyles();
  const getComponentvariant = type => {
    return type
      .replace(/\s/g, '')
      .trim()
      .toLowerCase();
  };
  const Image = (
    <div className={'c-image'} ref={ref} data-inview={inView}>
      <figure>
        {inView ? (
          <picture>
            <source
              media="screen and (min-width: 560px)"
              srcSet={`${urlFor(_rawImage)
                .width(752)
                .height(422)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
            <source
              media="screen and (min-width: 320px)"
              srcSet={`${urlFor(_rawImage)
                .width(559)
                .height(314)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
            <img
              src={urlFor(_rawImage)
                .width(752)
                .height(422)
                .fit('max')
                .url()}
              alt={image.alt}
            />
          </picture>
        ) : null}
      </figure>
    </div>
  );

  return (
    <section
      className={classNames(
        classes.section,
        getComponentvariant(imageBlockType.name)
      )}
    >
      <div className="container">
        <Link to={url || '/'} className={classes.link}>
          <div className={classes.content}>
            <div
              className={classNames('c-image_wrapper', classes.imageWrapper)}
            >
              {Image}
            </div>
            <div className={classNames('c-image_text', classes.copyText)}>
              <div className={classes.sectionDivider}></div>
              <div className={classes.sliderTitle}>Get Moving</div>
              <h2 className={classes.articleTitle}>
                <span>{name}</span>
              </h2>
              {_rawTextBlockBody && (
                <BlockContent
                  serializers={blockTypeDefaultSerializers}
                  blocks={_rawTextBlockBody}
                />
              )}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ImageBlock;
