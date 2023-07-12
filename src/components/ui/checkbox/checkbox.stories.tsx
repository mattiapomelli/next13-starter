import { Checkbox } from "./checkbox";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const render = (props: Story["args"]) => <Checkbox {...props} />;

export const Primary: Story = {
  render,
  args: {
    color: "primary",
  },
};

export const Secondary: Story = {
  render,
  args: {
    color: "secondary",
  },
};

export const Accent: Story = {
  render,
  args: {
    color: "accent",
  },
};

export const Tiny: Story = {
  render,
  args: {
    size: "xs",
  },
};

export const Small: Story = {
  render,
  args: {
    size: "sm",
  },
};

export const Normal: Story = {
  render,
  args: {
    size: "md",
  },
};

export const Large: Story = {
  render,
  args: {
    size: "lg",
  },
};

export const WithLabelTiny: Story = {
  render,
  args: {
    label: "Checked",
    labelSize: "xs",
  },
};

export const WithLabelSmall: Story = {
  render,
  args: {
    label: "Checked",
    labelSize: "sm",
  },
};

export const WithLabelNormal: Story = {
  render,
  args: {
    label: "Checked",
    labelSize: "md",
  },
};

export const WithLabelLarge: Story = {
  render,
  args: {
    label: "Checked",
    labelSize: "lg",
  },
};

export const Disabled: Story = {
  render,
  args: {
    disabled: true,
  },
};

export const DisabledWithLabel: Story = {
  render,
  args: {
    label: "Checked",
    disabled: true,
  },
};
