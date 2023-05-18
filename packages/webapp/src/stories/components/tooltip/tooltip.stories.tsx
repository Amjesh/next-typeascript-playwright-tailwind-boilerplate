import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import Tooltip from '@/components/tooltip';
import InlineSvg from '@/components/inline-svg';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Elements/Tooltip',
  component: Tooltip
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam iaculis sollicitudin accumsan. Sed et volutpat risus. Etiam eget sollicitudin tortor. Suspendisse vel ornare nunc. Donec vitae congue dolor.',
    children: (
      <InlineSvg
        src="/assets/svg/questionMark.svg"
        alt="Delete Icon"
        width={20}
        height={20}
      />
    ),
    className:
      'absolute p-2 w-64 break-words rounded-md transition-opacity duration-300 '
  }
};
