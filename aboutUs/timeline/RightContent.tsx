import * as React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: any;
}

const RightContent: React.SFC<Props> = ({ children }: Props) => (
  <div className="content-right-container">
    <div className="content-right">
      {children}
    </div>
  </div>
);

export default RightContent;
