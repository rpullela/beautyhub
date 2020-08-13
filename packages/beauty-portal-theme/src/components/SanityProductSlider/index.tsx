import React, { FunctionComponent } from 'react';
import { SanityProductSliderInterface } from './models';
import TileSlider from '../TileSlider';

import useStyles from './styles';

const SanityProductSlider: FunctionComponent<SanityProductSliderInterface> = ({
  name,
  slides,
  headline,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div style={{ height: '150px', overflow: 'hidden', margin: '-70px' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M00.00,25.27 C280.83,192.92 304.30,-70.39 500.00,89.03 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: 'none', fill: 'white' }}
          ></path>
        </svg>
      </div>
      <div className="container">
        <div className="waveStyling">
          <TileSlider name={name} slides={slides} headline={headline} />
        </div>
      </div>
    </section>
  );
};

export default SanityProductSlider;
