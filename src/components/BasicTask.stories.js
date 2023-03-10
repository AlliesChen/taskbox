
import BasicTask from './BasicTask.vue';

import { action } from '@storybook/addon-actions';

export default {
  component: BasicTask,
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'BasicTask',
  // Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

const Template = args => ({
  components: { BasicTask },
  setup() {
    return { args, ...actionsData };
  },
  template: '<BasicTask v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
