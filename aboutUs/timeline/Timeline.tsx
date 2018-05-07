import { css } from "glamor";
import * as React from "react";
import defaultStyles from "./TimelineStyle";

interface Props extends React.HTMLProps<HTMLDivElement> {
  style?: React.CSSProperties;
  children?: any;
}

interface State {

}

class Timeline extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div {...css(defaultStyles, this.props.style)}>

        <div className="conference-timeline">
          <div className="conference-center-line" />
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default Timeline;
