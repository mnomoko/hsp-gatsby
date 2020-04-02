import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  let { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  const closeMenu = (props) => {
    document.getElementById("burgerMenu").click();
  };

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
          <li><a href="#mission-section" onClick={closeMenu} className="nav-link">Notre&nbsp;mission</a></li>
          <li><a href="#why-us-section" onClick={closeMenu} className="nav-link">Pourquoi&nbsp;nous</a></li>
          <li><a href="#clients-section" onClick={closeMenu} className="nav-link">Nos clients</a></li>
          <li><a href="#about-section" onClick={closeMenu} className="nav-link">A propos</a></li>
          <li><a href="#contact-section" onClick={closeMenu} className="nav-link">Contact</a></li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  z-index: 1000;
  background: #FF8E00;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;
  
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #2d3436;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
