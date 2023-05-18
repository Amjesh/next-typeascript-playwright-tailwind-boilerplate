import { StoryObj, Meta } from '@storybook/react';
import Textarea from '@/components/form-elements/text-area';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Elements/Textarea',
  component: Textarea
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {
    label: '',
    id: 'textarea-primary',
    placeholder: 'Enter story',
    row: 5
  }
};
