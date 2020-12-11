import React from "react";
import {SimSwitcherButton, Props} from "../../app/atoms/SimSwitcherButton";
import {Meta, Story} from "@storybook/react/types-6-0";


export default{
    title: "Sim switcher",
    component: SimSwitcherButton
} as Meta;

const Template: Story<Props> = args => <SimSwitcherButton {...args}/>


export const Primary = Template.bind({});

Primary.args={
    notificationCount: 3,
    onClick: ()=> console.log("clicked")

};

