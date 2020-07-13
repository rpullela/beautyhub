import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { useInView } from 'react-intersection-observer';

import useStyles from './styles';

const ReadNext: FunctionComponent<ReadNextInterface> = ({ data, title }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  const classes = useStyles();
  return (
    <section className={classes.readNext}>
      <h2 className={classes.readNextTitle}>{title}</h2>
      <div className={classes.readNextContent}>
        <Link className={classes.readNextLink} to={data.readnext.path}>
          <div className={classes.readNextImage} ref={ref} data-inview={inView}>
            {inView ? (
              <Img
                fluid={data.readnext.heroImage.asset.fluid}
                alt={data.readnext.heroImage.alt}
              />
            ) : null}
          </div>
          <div className={classes.readNextCopy}>
            <span className={classes.readNextCopyType}>
              {data.readnext._type}
            </span>
            <h3 className={classes.readNextCopyTitle}>
              <span>{data.readnext.headline}</span>
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

interface ReadNextInterface {
  data: any;
  title: string;
}
export default ReadNext;
