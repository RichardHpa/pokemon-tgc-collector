import { Button } from "./Button";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

const Template: ComponentStory<typeof Button> = ({ variant, ...args }) => {
  return (
    <>
      <Button color="primary" variant={variant} {...args}>
        Primary - {variant}
      </Button>
      <Button color="secondary" variant={variant} {...args}>
        Secondary - {variant}
      </Button>
      <Button color="danger" variant={variant} {...args}>
        Danger - {variant}
      </Button>
    </>
  );
};

export const Solid = Template.bind({});
Solid.args = {
  variant: "solid",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: "ghost",
};

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
