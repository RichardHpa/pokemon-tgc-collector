import { Checkbox as CheckboxComponent } from "./Checkbox";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

const Template: ComponentStory<typeof CheckboxComponent> = ({ ...args }) => {
  return (
    <CheckboxComponent
      {...args}
      label="Input Field Label"
      name="storybook-checkbox"
    />
  );
};

export const Checkbox = Template.bind({});

export default {
  title: "Components/Inputs/Checkbox",
  component: CheckboxComponent,
} as ComponentMeta<typeof CheckboxComponent>;
