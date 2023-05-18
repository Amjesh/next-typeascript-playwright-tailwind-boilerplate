import { StoryObj, Meta } from '@storybook/react';
import TextInput from '@/components/form-elements/text-input';

const meta: Meta<typeof TextInput> = {
  title: 'Components/Elements/Inputbox',
  component: TextInput
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    label: '',
    id: 'input-primary',
    input: {}
  }
};

export const Disabled: Story = {
  args: {
    id: 'input-disable',
    disabled: true,
    input: {}
  }
};

export const InputWithLeftIcon: Story = {
  args: {
    id: 'input-with-left-icon',
    leftIcon: '@',
    className: 'rounded-r',
    input: {}
  }
};

export const InputWithRightIcon: Story = {
  args: {
    id: 'input-with-right-icon',
    rightIcon: '#',
    className: 'rounded-l',
    input: {}
  }
};

export const InputWithLeftRightIcon: Story = {
  args: {
    id: 'input-with-left-right-icon',
    rightIcon: '#',
    leftIcon: '@',
    className: '',
    input: {}
  }
};
