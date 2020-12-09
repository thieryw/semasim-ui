import React from "react";
import {ButtonExample, Props} from "../../atoms/ButtonExample";
import {Meta, Story} from "@storybook/react/types-6-0";
import {Center} from "../../../utils/decorators/Center";

export default{
    title: "Button Example",
    component: ButtonExample,
    decorators: [story => <Center>{story()}</Center>]

} as Meta;

const Template: Story<Props> = args => <ButtonExample {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: "blue",
    color: "beige",
    label: "Button Example",
    
}




