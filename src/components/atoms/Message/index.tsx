import React, { useEffect } from 'react';
import styled from 'styled-components';
import * as WebFont from 'webfontloader';

interface MessageProps {
  message: string;
}

const Message = ({ message }: MessageProps) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins'],
      },
    });
  }, []);
  return <StyledMessage>{message}</StyledMessage>;
};

export default Message;

const StyledMessage = styled.p`
  font-family: poppins, serif;
  font-style: normal;
  font-size: 14px;
  letter-spacing: -0.035em;
  margin-top: 0;
  color: #fff;
`;
