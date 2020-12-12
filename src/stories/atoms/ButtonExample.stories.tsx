import React from "react";
import {ButtonExample, Props} from "../../app/atoms/Button";
import {Meta, Story} from "@storybook/react/types-6-0";
import {Container} from "@material-ui/core";

export default{
    title: "Button Example",
    component: ButtonExample,
    decorators: [story => <Container maxWidth="sm">{story()}</Container>]

} as Meta;

const Template: Story<Props> = args => <ButtonExample {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: "blue",
    color: "beige",
    label: "Button Example",
    
}




