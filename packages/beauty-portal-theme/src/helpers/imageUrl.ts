import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from './sanityConfig';

const builder = imageUrlBuilder(sanityConfig);

export const urlFor = source => {
  return builder.image(source);
};
