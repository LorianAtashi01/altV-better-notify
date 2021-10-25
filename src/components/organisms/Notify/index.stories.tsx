import React from 'react';
import { Story, Meta } from '@storybook/react';
import Notify from '.';

interface NotifyProps {
  iconType: number;
  title: string;
  message: string;
  color: string;
  width: number;
}

export default {
  component: Notify,
  title: 'Organisms/Notify',
} as Meta;

const Template = (args: NotifyProps) => (
  <Notify
    iconType={args.iconType}
    title={args.title}
    message={args.message}
    color={args.color}
    width={args.width}
  ></Notify>
);

export const LoginButton = Template.bind({});
LoginButton.args = {
  iconType: 2,
  title: 'Test',
  message: 'Test sdkjlgfhndsfklghdsklfhndskgsd',
  color: 'F88F01',
  width: 0,
};
