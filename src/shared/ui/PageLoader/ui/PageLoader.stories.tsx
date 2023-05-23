import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageLoader } from './PageLoader';
import '@/app/styles/index.scss';

export default {
    title: 'shared/PageLoader',
    component: PageLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
