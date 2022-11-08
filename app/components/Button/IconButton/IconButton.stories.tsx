import { IconButton } from "./IconButton";

import { SunIcon } from "@heroicons/react/24/solid";

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import type { Variant } from "~/types/variants";

const Template: ComponentStory<typeof IconButton> = ({ variant, ...args }) => {
  return (
    <>
      <h2 className="text-xl">{variant}</h2>
      <div className="mt-2 flex space-x-2">
        <IconButton {...args} icon={<SunIcon />} variant={variant} />
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

const variants: Variant[] = ["solid", "outline", "ghost", "text"];
const OverviewComponent: ComponentStory<typeof IconButton> = ({
  variant,
  ...args
}) => {
  return (
    <>
      {variants.map((variant) => (
        <div key={variant} className="mt-2 flex space-x-2">
          <IconButton
            {...args}
            icon={<SunIcon />}
            color="primary"
            variant={variant}
          />
          <IconButton
            {...args}
            icon={<SunIcon />}
            color="secondary"
            variant={variant}
          />
          <IconButton
            {...args}
            icon={<SunIcon />}
            color="danger"
            variant={variant}
          />
          <IconButton
            {...args}
            icon={<SunIcon />}
            color="neutral"
            variant={variant}
          />
        </div>
      ))}
    </>
  );
};

export const Snapshots = OverviewComponent.bind({});

export default {
  title: "Components/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;
