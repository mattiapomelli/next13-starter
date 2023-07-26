import { Button } from "../button";

import { ToastAction, ToastActionElement } from "./toast";
import { Toast } from "./toast";
import { Toaster } from "./toaster";
import { toast } from "./use-toast";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toast> = {
  component: Toast,
};

export default meta;

type Story = StoryObj<{
  action?: ToastActionElement;
}>;

const render = (props: Story["args"]) => {
  const openToast = () => {
    toast({
      title: `Toast title`,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas officia aliquid modi.",
      variant: "default",
      action: props?.action,
    });
  };

  return (
    <>
      <Toaster />
      <Button onClick={openToast}>Open toast</Button>
    </>
  );
};

export const Default: Story = {
  render,
};

export const WithAction: Story = {
  render,
  args: {
    action: (
      <ToastAction altText="Action" asChild>
        <Button onClick={() => console.log("Undone")} size="xs">
          Undo
        </Button>
      </ToastAction>
    ),
  },
};
