import { Button } from "./Button";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

const Template: ComponentStory<typeof Button> = ({ variant, ...args }) => {
  return (
    <>
      <h2 className="text-xl">{variant}</h2>
      <div className="mt-2 flex space-x-2">
        <Button color="primary" variant={variant} {...args}>
          Primary
        </Button>
        <Button color="secondary" variant={variant} {...args}>
          Secondary
        </Button>
        <Button color="danger" variant={variant} {...args}>
          Danger
        </Button>
        <Button color="neutral" variant={variant} {...args}>
          Neutral
        </Button>
      </div>
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

export const Text = Template.bind({});
Text.args = {
  variant: "text",
};

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
