import { Meta, Story } from '@storybook/react/types-6-0';
import Main from './Main';

export default {
  title: 'Main',
  component: Main
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;

// title={text('Title', 'React Avançado')}
// description={text('Description', 'Typescript, ReactJS e Styled Components')}
