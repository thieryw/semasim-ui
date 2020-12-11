import React from "react";
import {Props, SignalQualityIndicator} from "../../app/atoms/SignalQualityIndicator";
import {Meta, Story} from "@storybook/react/types-6-0";


export default{
    title: "Signal quality indicator",
    component: SignalQualityIndicator
} as Meta;


const Template: Story<Props> = args => <SignalQualityIndicator {...args}/>

export const Primary = Template.bind({});

Primary.args={
    signalQuality: "excellent"
}