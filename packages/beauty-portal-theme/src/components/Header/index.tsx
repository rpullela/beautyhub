import React, { FunctionComponent, useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SiteNavigation from '../Navigation';
import SiteSearch from './search';
import NewsletterFollow from './newsletter-follow';
import useStyles from './styles';
import RexonaLogo from '../../images/rexona-logo.png';

const Header: FunctionComponent = () => {
  const data = useStaticQuery(graphql`
    query brandSocialLinks {
      brandInfo: sanityBrandInfo {
        pinteresturl
        twitterurl
        youtubeurl
        facebookurl
        instaurl
        spotifyurl
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
              <img
                src={RexonaLogo}
                alt="Rexona Logo"
                role="presentation"
                width="48"
              />
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
              <Link to="/contact-us" className={classes.navigationLink}>
                Contact
              </Link>{' '}
              |{' '}
              <Link to="/about-us" className={classes.navigationLink}>
                About Us
              </Link>{' '}
              |{' '}
              <Link to="/faqs" className={classes.navigationLink}>
                FAQs
              </Link>
              |{' '}
              {auth ? (
                <Link to="/profile" className={classes.navigationLink}>
                  Profile
                </Link>
              ) : (
                <span>
                  {' '}
                  <Link to="/login" className={classes.navigationLink}>
                    Login
                  </Link>
                  /
                  <Link to="/sign-up" className={classes.navigationLink}>
                    Sign up
                  </Link>
                </span>
              )}
            </span>
            {/* <NewsletterFollow
              label={'Subscribe to our newsletter'}
              links={data.brandInfo}
            /> */}
          </span>
          <SiteSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
