import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/portfolio/contact">Contact</Link>
        </li>
        <li>
          <Link to="/portfolio/background">Background</Link>
        </li>
        <li>
          <Link to="/portfolio/faqs">FAQ's</Link>
        </li>
        <li>
          <Link to="/portfolio/hobbies">Hobbies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;