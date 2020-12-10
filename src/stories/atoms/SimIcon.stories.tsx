import React from "react";
import {SimIcon, Props} from "../../app/atoms/SimIcon";
import {Meta, Story} from "@storybook/react/types-6-0";
import {Container} from "@material-ui/core";


export default{
    title: "Sim Icon",
    component: SimIcon,
    decorators: [story => <Container maxWidth="sm">{story()}</Container>]
} as Meta;

const Template: Story<Props> = args => <SimIcon {...args}/>


export const Primary = Template.bind({});

Primary.args={
    online: true,
}