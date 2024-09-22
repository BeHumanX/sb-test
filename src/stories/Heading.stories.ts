import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../components/Heading";


const meta = {
    title: 'Example/Heading',
    component: Heading,
    parameters: {
        layout: 'centered'
    },
    tags:['autodocs'],
    argTypes:{
        backgroundColor: {control:'color'}
    }
}satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Large: Story = {
    args:{
        size: 'large',
        label: 'Heading'
    }
}
export const Small: Story = {
    args:{
        size:'small',
        label:'Heading'
    }
}