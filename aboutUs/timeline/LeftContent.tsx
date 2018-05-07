import * as React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: any;
}

const LeftContent: React.SFC<Props> = ({ children }: Props) => (
  <div className="content-left-container" >
    <div className="content-left">
      {children}
    </div>
  </div>
);

export default LeftContent;
