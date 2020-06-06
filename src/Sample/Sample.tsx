import React from "react";
import { Button } from "@storybook/react/demo";
import { action } from "@storybook/addon-actions";

export function Sample() {
    return <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      sample 👍
    </span>
    </Button>
}