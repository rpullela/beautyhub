import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { urlFor } from '../../helpers/imageUrl';

import { ReactComponent as IconBuy } from '../../images/icons/buy.svg';

import useStyles from './styles';

const Product: FunctionComponent<ProductInterface> = ({ metadata, data }) => {
  const {
    slug,
    image: { alt },
    buyNow,
    tagLine,
    name,
  } = metadata;
  const { image } = data;
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Link className={classes.link} to={(slug && slug.current) || '/'}>
        <div className={classes.image}>
          <figure>
            <picture>
              <source
                media="screen and (min-width: 1280px)"
                srcSet={`${urlFor(image)
                  .width(250)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()}, ${urlFor(image)
                  .width(500)
                  .fit('max')
                  .auto('format')
                  .url()
                  .toString()} 2x`}
              />
              <img
                src={urlFor(image)
                  .width(250)
                  .fit('max')
                  .auto('format')
                  .url()}
                alt={alt}
              />
            </picture>
          </figure>
        </div>
        {tagLine && (
          <p className={classes.tagline}>
            <span>{tagLine}</span>
          </p>
        )}
        {name && (
          <h3 className={classes.name}>
            <span>{name}</span>
          </h3>
        )}
      </Link>
      {buyNow && (
        <a
          className={classes.buynow}
          href={buyNow}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={classes.animateIcon}>
            <IconBuy />
            <span>Buy Now</span>
          </span>
        </a>
      )}
    </div>
  );
};

interface ProductInterface {
  metadata: any;
  data: any;
}
export default Product;
