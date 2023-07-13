import { Input } from "./input";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const render = (props: Story["args"]) => <Input {...props} />;

export const Solid: Story = {
  render,
  args: {
    variant: "solid",
  },
};

export const Outline: Story = {
  render,
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  render,
  args: {
    variant: "ghost",
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

export const Disabled: Story = {
  render,
  args: {
    disabled: true,
  },
};

export const Block: Story = {
  render,
  args: {
    block: true,
  },
};

export const WithLabels: Story = {
  render,
  args: {
    label: "Main Label",
    topRightLabel: "Alt Label",
    bottomLeftLabel: "Alt Label",
    bottomRightLabel: "Alt Label",
  },
};

export const WithError: Story = {
  render,
  args: {
    error: "This field is required",
  },
};

const SearchIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      d="m19.02 18.063 4.782 4.782a.676.676 0 0 1-.957.957l-4.782-4.783a.676.676 0 0 1 .956-.956zM10.144 0C15.748 0 20.29 4.542 20.29 10.145S15.748 20.29 10.145 20.29 0 15.748 0 10.145 4.542 0 10.145 0zm0 1.353a8.792 8.792 0 1 0 0 17.584 8.792 8.792 0 0 0 0-17.584z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const WithLeftIcon: Story = {
  render,
  args: {
    leftIcon: <SearchIcon />,
  },
};

export const WithRightIcon: Story = {
  render,
  args: {
    rightIcon: <SearchIcon />,
  },
};
