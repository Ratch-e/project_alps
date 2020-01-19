import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

storiesOf("Button", module).add("Simple button", () => (
  <Button onClick={action("clicked")}>Hello, I am a button!</Button>
));
