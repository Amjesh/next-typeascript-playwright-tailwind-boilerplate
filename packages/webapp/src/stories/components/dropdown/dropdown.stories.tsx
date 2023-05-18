import { StoryObj, Meta } from '@storybook/react';
import DropdownButton from '@/components/dropdown';

const meta: Meta<typeof DropdownButton> = {
  title: 'Components/Elements/Dropdown',
  component: DropdownButton
};

export default meta;
type Story = StoryObj<typeof DropdownButton>;

const options = [
  {
    label: 'Option 1',
    value: 'option1'
  },
  {
    label: 'Option 2',
    value: 'option2'
  },
  {
    label: 'Option 3',
    value: 'option3'
  }
];

export const Primary: Story = {
  args: {
    color: '#ffffff',
    onChange: () => void 0,
    options: options,
    label: 'Dropdown',
    className:
      'bg-primary-900 rounded-lg py-2 pl-3 pr-3.5 text-xs font-medium text-white shadow-[0_4px_9px_-4px_#3b71ca] hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]',
    panelClass: 'bg-gray-100',
    optionClass: 'hover:bg-gray-50 text-gray-900 py-2 pl-6 pr-3'
  }
};
