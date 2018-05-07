import { css } from "glamor";
import * as React from "react";
import defaultStyles from "./BoxContentStyles";
interface Props extends React.HTMLProps<HTMLDivElement> {
  iconImage?: any;
  title?: string;
  children?: any;
  styles?: any;
}

const BoxContent: React.SFC<Props> = ({ children, iconImage, styles, title, ...props }: Props) => (
  <div {...css(defaultStyles, styles)} {...props}>
    <div className="text-center" >
      <img className="box-logo" src={iconImage} />
      <div className="box-title" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="box-text">
        {children}
      </div>
    </div>
  </div>
);

export default BoxContent;
