import React, { FunctionComponent, useState } from 'react';
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
  const [auth, setAuth] = useState(false);

  return (
    <header className={classes.header} role="banner" aria-label="header">
      <div className="container">
        <div className={classes.headerContentWrapper}>
          <div className={classes.logo}>
            <Link className={classes.logoLink} to="/">
              Rexona <span>Portal</span>
            </Link>
          </div>
          <SiteNavigation />
          <span
            style={{
              zIndex: 1,
              position: 'absolute',
              top: 0,
              right: 0,
              padding: '5px 20px',
              color: '#666',
            }}
          >
            <span className={classes.navigationLinks}>
              <Link to="/" className={classes.navigationLink}>
                Contact
              </Link>{' '}
              |{' '}
              <Link to="/" className={classes.navigationLink}>
                About Us
              </Link>{' '}
              |{' '}
              <Link to="/" className={classes.navigationLink}>
                FAQs
              </Link>
              |{' '}
              {auth ? (
                <Link to="/" className={classes.navigationLink}>
                  Profile
                </Link>
              ) : (
                <span>
                  {' '}
                  <Link to="/" className={classes.navigationLink}>
                    Login
                  </Link>
                  /
                  <Link to="/" className={classes.navigationLink}>
                    Sign up
                  </Link>
                </span>
              )}
            </span>
            {/* <NewsletterFollow
              label={'Subscribe to our newsletter'}
              links={data.brandInfo}
            /> */}
            <SiteSearch />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
