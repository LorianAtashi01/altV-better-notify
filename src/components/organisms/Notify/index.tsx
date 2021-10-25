import React from 'react';
import styled from 'styled-components';
import NotifyHolder from '../../moleculs/NotifyHolder';
import Icons from '../../atoms/Icons';
import { ReactSVG } from 'react-svg';

import RedBubbles from '../../../assets/redbubbles.svg';

interface NotifyProps {
  iconType: number;
  title: string;
  message: string;
  color: string;
  width: number;
}

const Notify = ({ iconType, title, message, color, width }: NotifyProps) => {
  return (
    <MainWrapper>
      <StyledIcon iconType={iconType} />
      <StyledSVG src={RedBubbles} />
      <StyledBackground color={color}>
        <NotifyHolder
          title={title}
          message={message}
          width={width}
        ></NotifyHolder>
      </StyledBackground>
    </MainWrapper>
  );
};

export default Notify;

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  border-radius: 32px;
  height: 174px;
  width: 438px;
  overflow: hidden;
`;

const StyledBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #${({ color }) => color};
  border-radius: 32px;
  width: 100%;
`;

const StyledIcon = styled(Icons)`
  z-index: 15;
  position: absolute;
  top: 30px;
  left: 23px;
`;

const StyledSVG = styled(ReactSVG)`
  z-index: 15;
  position: absolute;
  bottom: -10px;
`;
