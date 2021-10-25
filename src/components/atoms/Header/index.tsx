import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as WebFont from 'webfontloader';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins'],
      },
    });
  }, []);
  return <StyledHeader>{title}</StyledHeader>;
};

export default Header;

const StyledHeader = styled.h1`
  font-family: poppins, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 51px;
  letter-spacing: -0.035em;
  color: #fff;
  margin: 0 !important;
`;
