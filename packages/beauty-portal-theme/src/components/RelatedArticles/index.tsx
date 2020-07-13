import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import { urlFor } from '../../helpers/imageUrl';

import useStyles from './styles';

const RelatedArticles: FunctionComponent<RelatedArticlesInterface> = ({
  articles,
  title,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });
  const classes = useStyles();
  const firstArticle = articles.shift();
  const lastArticle = articles.pop();

  const normalThumbSize = article => {
    return (
      <figure>
        <picture>
          <source
            media="screen and (min-width: 320px)"
            srcSet={`${urlFor(article._rawHeroImage)
              .width(80)
              .height(80)
              .fit('max')
              .url()
              .toString()} 1x, ${urlFor(article._rawHeroImage)
              .width(160)
              .height(160)
              .fit('crop')
              .url()
              .toString()} 2x`}
          />
          <img
            src={urlFor(article._rawHeroImage)
              .width(160)
              .height(160)
              .fit('crop')
              .url()}
            alt={article._rawHeroImage.alt}
            width="80"
            height="80"
          />
        </picture>
      </figure>
    );
  };
  const fullThumbSize = article => {
    return (
      <figure>
        <picture className={classes.picture}>
          <source
            media="screen and (min-width: 1280px)"
            srcSet={`${urlFor(article._rawHeroImage)
              .width(400)
              .height(206)
              .fit('crop')
              .url()
              .toString()} 1x, ${urlFor(article._rawHeroImage)
              .width(800)
              .height(412)
              .fit('crop')
              .url()
              .toString()} 2x`}
          />
          <source
            media="screen and (min-width: 320px)"
            srcSet={`${urlFor(article._rawHeroImage)
              .width(382)
              .height(171)
              .fit('max')
              .url()
              .toString()} 1x, ${urlFor(article._rawHeroImage)
              .width(764)
              .height(342)
              .fit('crop')
              .url()
              .toString()} 2x`}
          />
          <img
            className={classes.image}
            src={urlFor(article._rawHeroImage)
              .width(400)
              .height(206)
              .fit('crop')
              .url()}
            alt={article._rawHeroImage.alt}
          />
        </picture>
      </figure>
    );
  };
  const halfThumbSize = article => {
    return (
      <figure>
        <picture>
          <source
            media="screen and (min-width: 1280px)"
            srcSet={`${urlFor(article._rawHeroImage)
              .width(175)
              .height(175)
              .fit('crop')
              .url()
              .toString()} 1x, ${urlFor(article._rawHeroImage)
              .width(350)
              .height(350)
              .fit('crop')
              .url()
              .toString()} 2x`}
          />
          <source
            media="screen and (min-width: 320px)"
            srcSet={`${urlFor(article._rawHeroImage)
              .width(150)
              .height(150)
              .fit('max')
              .url()
              .toString()} 1x, ${urlFor(article._rawHeroImage)
              .width(300)
              .height(300)
              .fit('crop')
              .url()
              .toString()} 2x`}
          />
          <img
            src={urlFor(article._rawHeroImage)
              .width(175)
              .height(175)
              .fit('max')
              .url()}
            alt={article._rawHeroImage.alt}
          />
        </picture>
      </figure>
    );
  };

  const renderListItem = (article: any, position?: string) => {
    if (!position) {
      position = 'normal';
    }
    return (
      <article
        className={classNames('c-teaser__item', classes.teaser)}
        key={article.id}
      >
        <Link
          to={article.path}
          className={classes.teaserLink}
          aria-label={article.headline}
        >
          <div className={classes.flexBox}>
            <div className={'c-teaser__image'}>
              {position === 'normal' && normalThumbSize(article)}
              {position === 'first' && fullThumbSize(article)}
              {position === 'last' && halfThumbSize(article)}
            </div>

            <div className={classNames('c-teaser__copy', classes.teaserCopy)}>
              <span className={classes.teaserType}>{article._type}</span>
              <h3 className={classes.teaserTitle}>
                <span>{article.headline}</span>
              </h3>
            </div>
          </div>
        </Link>
      </article>
    );
  };

  return (
    <>
      <div className={classes.teaserWrapper} ref={ref} data-inview={inView}>
        <h4 className={classes.title}>{title}</h4>
        {inView ? (
          <div>
            {firstArticle && (
              <div
                className={classNames('c-article__first', classes.teaserFirst)}
              >
                {renderListItem(firstArticle, 'first')}
              </div>
            )}
            <div className={classes.scrollArea}>
              {articles &&
                articles.slice(0, 8).map((article: any) => {
                  return renderListItem(article);
                })}
            </div>

            {lastArticle && (
              <div
                className={classNames('c-article__last', classes.teaserLast)}
              >
                {renderListItem(lastArticle, 'last')}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
};

interface RelatedArticlesInterface {
  articles: any;
  title: string;
}

export default RelatedArticles;
