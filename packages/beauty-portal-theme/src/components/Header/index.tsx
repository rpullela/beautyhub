import React, { FunctionComponent } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SiteNavigation from '../Navigation';
import SiteSearch from './search';
import NewsletterFollow from './newsletter-follow';
import useStyles from './styles';

const Header: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query brandSocialLinks {
      brandInfo: sanityBrandInfo {
        pinteresturl
        twitterurl
        youtubeurl
        facebookurl
        instaurl
      }
    }
  `);
  const classes = useStyles();

  return (
    <header className={classes.header} role="banner" aria-label="header">
      <div className="container">
        <div className={classes.headerContentWrapper}>
          <div className={classes.logo}>
            <Link className={classes.logoLink} to="/">
              Beauty <span>Portal</span>
            </Link>
          </div>
          <SiteNavigation />
          <div className={classes.siteLogin}>
            <Link to="/login" className={classes.searchButton}>
              Login
            </Link>
          </div>
          <NewsletterFollow
            label={'Subscribe to our newsletter'}
            links={data.brandInfo}
          />
          <SiteSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
