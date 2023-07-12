import { Button } from "./button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

const render = (props: Story["args"]) => <Button {...props}>Button</Button>;

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

export const Info: Story = {
  render,
  args: {
    color: "info",
  },
};

export const Success: Story = {
  render,
  args: {
    color: "success",
  },
};

export const Warning: Story = {
  render,
  args: {
    color: "secondary",
  },
};

export const Error: Story = {
  render,
  args: {
    color: "error",
  },
};

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

export const Link: Story = {
  render,
  args: {
    variant: "link",
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

export const Block: Story = {
  render,
  args: {
    block: true,
  },
};

export const Disabled: Story = {
  render,
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  render,
  args: {
    loading: true,
  },
};

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
);

export const WithLeftIcon: Story = {
  render,
  args: {
    leftIcon: <HomeIcon />,
  },
};

export const WithRightIcon: Story = {
  render,
  args: {
    rightIcon: <HomeIcon />,
  },
};
