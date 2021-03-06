import React from 'react';
import GithubIcon from './GithubIcon';
import TwitterIcon from './TwitterIcon';
import LinkedInIcon from './LinkedInIcon';
const year = new Date().getFullYear();
const Footer = () => (
  <footer>
    <span className="footerCopyrights">
      © {year} Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
    <span className="footerCopyrights">
      Starter created by <a href="https://radoslawkoziel.pl">panr</a> and
      modified by <a href="https://twitter.com/yeuxeye">chihching</a>
    </span>
    <div className="footerIconGroup">
      <a
        className="iconLink"
        aria-label="Go to github link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/eyeccc"
      >
        <GithubIcon />
      </a>
      <a
        className="iconLink"
        aria-label="Go to twitter link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/yeuxeye"
      >
        <TwitterIcon />
      </a>
      <a
        className="iconLink"
        aria-label="Go to linkedin link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/chihchingchang/"
      >
        <LinkedInIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
