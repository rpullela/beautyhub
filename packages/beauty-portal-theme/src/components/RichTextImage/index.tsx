import React, { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';
import { urlFor } from '../../helpers/imageUrl';

const RichTextImage: FunctionComponent = ({ node }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div className={'c-image'} ref={ref} data-inview={inView}>
      <figure>
        {inView ? (
          <picture>
            <source
              media="screen and (min-width: 1280px)"
              srcSet={`${urlFor(node)
                .width(712)
                .fit('max')
                .url()
                .toString()}`}
            />
            <source
              media="screen and (min-width: 560px)"
              srcSet={`${urlFor(node)
                .width(528)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
            <source
              media="screen and (min-width: 320px)"
              srcSet={`${urlFor(node)
                .width(382)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
            <img
              src={urlFor(node)
                .width(712)
                .fit('max')
                .url()}
              alt={node.alt}
            />
          </picture>
        ) : null}
      </figure>
      <div className={'c-image__credit'}>
        <span>{node.imageCaption}</span>
        <span>{node.imageCredit}</span>
      </div>
    </div>
  );
};

export default RichTextImage;
