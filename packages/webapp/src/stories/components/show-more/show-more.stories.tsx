import React from 'react';
import { Meta, Story } from '@storybook/react';
import ShowMore from '@/components/show-more';

const items = [
  <div key="item1">Item 1</div>,
  <div key="item2">Item 2</div>,
  <div key="item3">Item 3</div>,
  <div key="item4">Item 4</div>
];

// Define Meta data
const meta: Meta = {
  title: 'ShowMore',
  component: ShowMore
};

// Define Story
const Template: Story = (args) => (
  <ShowMore
    items={items}
    initialItemsToShow={args.initialItemsToShow}
    label={args.label}
    className={args.className}
  />
);

// Define Story args and decorators
export const Default = Template.bind({});
Default.args = {
  initialItemsToShow: 2,
  className: 'max-h-24 overflow-y-auto'
};

export default meta;
