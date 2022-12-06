import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PulseIcon } from './PulseIcon';

const Story: ComponentMeta<typeof PulseIcon> = {
  component: PulseIcon,
  title: 'PulseIcon',
};
export default Story;

const Template: ComponentStory<typeof PulseIcon> = (args) => (
  <PulseIcon {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
