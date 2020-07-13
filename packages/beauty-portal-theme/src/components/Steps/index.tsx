import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from '../../helpers/imageUrl';
import useStyles from './styles';

const Steps: FunctionComponent = ({ node }) => {
  const { directions, imageName, instructionName, stepNumber } = node;
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  const classes = useStyles();

  return (
    <div
      className={classNames(stepNumber ? 'c-step__reset' : 'c-step')}
      ref={ref}
      data-inview={inView}
    >
      <BlockContent blocks={instructionName} />
      <BlockContent blocks={directions} />
      <figure>
        {inView ? (
          <picture>
            <source
              media="screen and (min-width: 1280px)"
              srcSet={`${urlFor(imageName)
                .width(612)
                .fit('max')
                .url()
                .toString()}`}
            />
            <source
              media="screen and (min-width: 560px)"
              srcSet={`${urlFor(imageName)
                .width(484)
                .fit('max')
                .auto('format')
                .url()
                .toString()}`}
            />
            <source
              media="screen and (min-width: 320px)"
              srcSet={`${urlFor(imageName)
                .width(342)
                .fit('max')
                .url()
                .toString()}`}
            />
            <img
              src={urlFor(imageName)
                .width(612)
                .fit('max')
                .url()}
              alt={imageName.alt}
            />
          </picture>
        ) : null}
      </figure>
    </div>
  );
};

export default Steps;
