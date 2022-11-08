import { Button } from "./Button";

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { variant } from "~/types/variants";

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

const variants: variant[] = ["solid", "outline", "ghost", "text"];
const OverviewComponent: ComponentStory<typeof Button> = ({
  variant,
  ...args
}) => {
  return (
    <>
      {variants.map((variant) => (
        <div key={variant} className="mt-2 flex space-x-2">
          <Button {...args} color="primary" variant={variant}>
            Primary
          </Button>
          <Button {...args} color="secondary" variant={variant}>
            Secondary
          </Button>
          <Button {...args} color="danger" variant={variant}>
            Danger
          </Button>
          <Button {...args} color="neutral" variant={variant}>
            Neutral
          </Button>
        </div>
      ))}
    </>
  );
};

export const Snapshots = OverviewComponent.bind({});

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;
