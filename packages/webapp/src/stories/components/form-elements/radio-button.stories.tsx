import { StoryObj, Meta } from '@storybook/react';
import RadioButton from '@/components/form-elements/radio-button';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/Elements/Radio',
  component: RadioButton
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Primary: Story = {
  args: {
    id: 'radio-primary',
    label: 'Primary Radio',
    input: {
      name: 'radio-group',
      value: 'option-primary'
    },
    className:
      'h-5 w-5 mt-0.5 mr-1 border-dark-900 border-2 before:h-4 before:w-4 after:h-4 after:w-4 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:border-dark-900 checked:after:border-dark-900 checked:after:bg-primary-900 checked:focus:border-dark-900',
    labelClass:
      'mb-2 text-primary-900 dark:border-dark-900 dark:checked:border-dark-900 dark:checked:after:border-dark-900 dark:checked:after:bg-primary-900 dark:checked:focus:border-dark-900'
  }
};

export const Secondary: Story = {
  args: {
    id: 'radio-primary',
    label: 'Primary Radio',
    input: {
      name: 'radio-group',
      value: 'option-primary',
      checked: true
    },
    className:
      'h-5 w-5 mt-0.5 mr-1 border-gray-400 border-2 before:h-4 before:w-4 after:h-4 after:w-4 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:border-gray-400 checked:after:border-gray-400 checked:after:bg-gray-400 checked:focus:border-gray-400',
    labelClass:
      'mb-2 dark:border-gray-400 dark:checked:border-gray-400 dark:checked:after:border-gray-400 dark:checked:after:bg-gray-400 dark:checked:focus:border-gray-400'
  }
};

export const WithoutLabel: Story = {
  args: {
    id: 'radio-primary',
    input: {
      name: 'radio-group',
      value: 'option-primary'
    },
    className:
      'h-5 w-5 mt-0.5 mr-1 border-dark-900 border-2 before:h-4 before:w-4 after:h-4 after:w-4 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:border-dark-900 checked:after:border-dark-900 checked:after:bg-primary-900 checked:focus:border-dark-900'
  }
};
export const labelBelow: Story = {
  args: {
    id: 'radio-primary',
    label: 'Primary Radio',
    input: {
      name: 'radio-group',
      value: 'option-primary'
    },
    className:
      'block h-5 w-5 mt-0.5 mr-1 border-gray-400 border-2 before:h-4 before:w-4 after:h-4 after:w-4 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:border-gray-400 checked:after:border-gray-400 checked:after:bg-gray-400 checked:focus:border-gray-400',
    labelClass:
      'block mb-2 dark:border-gray-400 dark:checked:border-gray-400 dark:checked:after:border-gray-400 dark:checked:after:bg-gray-400 dark:checked:focus:border-gray-400'
  }
};
