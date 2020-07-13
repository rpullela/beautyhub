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
      <div className="container">
        <TileSlider name={name} slides={slides} headline={headline} />
      </div>
    </section>
  );
};

export default SanityProductSlider;
