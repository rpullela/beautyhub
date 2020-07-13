import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import { urlFor } from '../../helpers/imageUrl';

const ProductList: FunctionComponent<ProductListInterface> = ({
  data,
  title,
}) => {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <h2 className={classes.sectionTitle}>{title}</h2>
      <Grid className={classes.gridContainer} container spacing={2}>
        {data &&
          data.map(product => (
            <Grid className={classes.gridItem} item xs={4} key={product.name}>
              <Link
                className={classes.gridItemLink}
                to={product.path || product.slug.current}
              >
                {product.image && (
                  <figure>
                    <picture>
                      <source
                        media="screen and (min-width: 1280px)"
                        srcSet={`${urlFor(product.image)
                          .width(140)
                          .fit('max')
                          .auto('format')
                          .url()
                          .toString()}, ${urlFor(product.image)
                          .width(280)
                          .auto('format')
                          .fit('max')
                          .url()
                          .toString()} 2x`}
                      />
                      <source
                        media="screen and (min-width: 768px)"
                        srcSet={`${urlFor(product.image)
                          .width(127)
                          .fit('max')
                          .auto('format')
                          .url()
                          .toString()}`}
                      />
                      <source
                        media="screen and (min-width: 320px)"
                        srcSet={`${urlFor(product.image)
                          .width(116)
                          .auto('format')
                          .fit('max')
                          .url()
                          .toString()}`}
                      />
                      <img
                        src={urlFor(product.image)
                          .width(116)
                          .auto('format')
                          .fit('max')
                          .url()}
                        alt={product.image.alt}
                      />
                    </picture>
                  </figure>
                )}
                <h3 className={classes.productTitle}>
                  <span>{product.name}</span>
                </h3>
              </Link>
            </Grid>
          ))}
      </Grid>
    </section>
  );
};

interface ProductListInterface {
  data: any;
  title: string;
}
export default ProductList;
