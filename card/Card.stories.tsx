import { storiesOf } from "@storybook/react";
import { css } from "glamor";
import * as React from "react";
import Banner from "../banner";
import Card from "./Card";

const content = "Please wait, we are processing your application";

storiesOf("Card", module)
  .add("with title", () => (
    <Card title="Approval Result">{content}</Card>
  ));
