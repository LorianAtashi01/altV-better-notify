import React from 'react';
import styled from 'styled-components';
import Header from '../../atoms/Header';
import Message from '../../atoms/Message';

interface NotifyHolderProps {
  title: string;
  message: string;
  width: number;
}

const NotifyHolder = ({ title, message, width }: NotifyHolderProps) => {
  return (
    <StyledNotifyHolder width={width}>
      <Header title={title} />
      <Message message={message} />
    </StyledNotifyHolder>
  );
};

export default NotifyHolder;

const StyledNotifyHolder = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: ${({ width }) => width}px;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;
