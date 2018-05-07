import { css, merge } from "glamor";
import * as React from "react";
import Icon from "../form/icon";
import defaultStyles from "./CardStyles";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: any;
  styles?: React.CSSProperties;
  title?: string;
  subTitle?: string;
}

const Card: React.SFC<Props> = ({ children, styles, title, ...props }: Props) => (
  <div {...css(defaultStyles, styles)} {...props} >
    {title ? <span className="cardTitleStyle">{title}</span> : null}
    <div>{children}</div>
  </div>
);

export default Card;
