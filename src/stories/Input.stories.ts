import type {Meta, StoryObj} from '@storybook/react';
import { Input } from '../components/Input';

const meta = {
    title: 'Example/Input',
    component: Input,
    parameters:{
        layout:'centered',
    },
    tags: ['autodocs'],
    
}satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Text: Story = {
    args:{
        inputType:'text',
        placeholder:'Email'
    }
}
export const Password: Story = {
    args:{
        inputType:'password',
        placeholder:'Password'
    }
}
export const File: Story = {
    args:{
        inputType:'file',
        placeholder:'File'
    }
}