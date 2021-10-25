import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

// Icon imports
import Fail from '../../../assets/fail.svg';
import Success from '../../../assets/success.svg';
import Warning from '../../../assets/warning.svg';

interface IconProps {
  iconType: number;
  className?: any;
}

const Icons = [Fail, Success, Warning];

const Icon = ({ iconType, className }: IconProps) => {
  return (
    <StyledIconHolder className={className}>
      <ReactSVG src={Icons[iconType]} />
    </StyledIconHolder>
  );
};

export default Icon;

const StyledIconHolder = styled.div`
  width: 8vh;
  height: 8vh;
`;
