import * as React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: any;
}

class TimelineElement extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div className="conference-timeline-content">
        <div className="timeline-article">
          {this.props.children}
          <div className="meta-icon" />
        </div>
      </div>
    );
  }
}

export default TimelineElement;
