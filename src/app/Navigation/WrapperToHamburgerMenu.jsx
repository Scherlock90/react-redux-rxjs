import React from 'react';
import HamburgerMenu from 'react-hamburger-menu';

export default ({ isOpen, menuClicked }) => (
  <div className="wrapper-to-hamburger-menu">
    <HamburgerMenu
      isOpen={isOpen}
      menuClicked={menuClicked}
      width={32}
      height={24}
      strokeWidth={4}
      rotate={0}
      color="black"
      borderRadius={0}
      animationDuration={0.2}
    />
  </div>
);
