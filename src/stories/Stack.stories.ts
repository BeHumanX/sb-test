import type {Meta,StoryObj} from '@storybook/react';
import { fn } from '@storybook/test';

import {Stack} from '../components/Stack';

const meta = {
    title: 'Example/Stack',
    component:Stack,
    parameters:{
        layout:'flex'
    },
    tags:['autodocs'],
    argTypes:{
        direction: {control: {type: 'select'}, options: ['row', 'column']},
        spacing: {control: {type: 'range'}, min: 0, max: 10, step: 1},
        wrap: {control: {type: 'boolean'}},
    },
    args:{
        direction: 'row',
        spacing: 2,
        wrap: true,
        borderRadius:1,
        numberOfChildren:2,
    }
}satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    args: {
        direction: "row",
        spacing: 2,
        wrap:true,
        numberOfChildren:2,
    },
}

export const Vertical: Story = {
    args:{
        direction:"column",
        spacing:2,
        wrap:true,
        numberOfChildren:2,
    }
}