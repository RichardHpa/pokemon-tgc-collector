import { InputField as InputFieldComponent } from "./InputField";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

const Template: ComponentStory<typeof InputFieldComponent> = ({ ...args }) => {
  return <InputFieldComponent {...args} label="Input Field Label" />;
};

export const InputField = Template.bind({});

export default {
  title: "Components/Inputs/InputField",
  component: InputFieldComponent,
} as ComponentMeta<typeof InputFieldComponent>;
