import React, { FunctionComponent } from 'react';
import Slider from '../Slider';
import { HeroSliderInterface } from './models';

const HeroSlider: FunctionComponent<HeroSliderInterface> = ({ slides }) => {
  return (
    <Slider
      type="hero"
      slides={slides}
      spaceBetween={0}
      slidesPerView={1}
      speed={700}
      threshold={5}
      lazy={true}
      preloadImages={false}
      freeMode={true}
      watchSlidesVisibility={false}
    />
  );
};

export default HeroSlider;
