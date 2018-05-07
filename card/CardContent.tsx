import { css } from "glamor";
import * as React from "react";
import { cardContentStyles } from "./CardStyles";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: any;
  styles?: React.CSSProperties;
}

const CardContent: React.SFC<Props> = ({ children, styles }: Props) => (
  <div {...css(cardContentStyles, styles)}>
    {children}
  </div>
);

export default CardContent;
