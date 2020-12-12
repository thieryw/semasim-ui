import React from "react";
import {Button, Props} from "../../app/atoms/Button";
import {Meta, Story} from "@storybook/react/types-6-0";
import {Container} from "@material-ui/core";

export default{
    title: "Button Example",
    component: Button,
    decorators: [story => <Container maxWidth="sm">{story()}</Container>]

} as Meta;

const Template: Story<Props> = args => <Button {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: "blue",
    color: "beige",
    label: "Button Example",
    
}




