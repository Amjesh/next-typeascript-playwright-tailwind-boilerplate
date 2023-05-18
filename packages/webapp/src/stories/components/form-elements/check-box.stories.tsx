import { StoryObj, Meta } from '@storybook/react';
import Checkbox from '@/components/form-elements/check-box';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Elements/Checkbox',
  component: Checkbox
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    id: 'checkbox-primary-900',
    label: 'Primary Checkbox',
    input: {
      checked: true
    }
  }
};
