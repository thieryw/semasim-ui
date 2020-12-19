import React from "react";
import {Props, MessageBubble} from "../../app/molecules/MessageBubble";
import type {Story} from "@storybook/react/types-6-0";

export default{
    "title": "Message Bubble",
    "component": MessageBubble,
}


const Template: Story<Props> = args => <MessageBubble {...args}/>

export const Primary = Template.bind({});

Primary.args = {
    "description": "message",
    "direction": "incoming",
    "messageStatus": "failed",
    "timeSent": "13 h 00"
}