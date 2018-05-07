import { css } from "glamor";
import { Colors, Metrics } from "../../../../theme";
import * as pointImage from "./assets/point1_copy.png";
// make css rules
const styles = css({
  "width": "100%",
  "& .conference-timeline": {
    "position": "relative",
    "maxWidth": "920px",
    "width": "100%",
    "margin": "0 auto",

    "& .conference-center-line": {
      position: "absolute",
      width: "1px",
      height: "100%",
      top: "0",
      left: "50%",
      marginLeft: "0px",
      borderLeft: `1px dashed ${Colors.blue}`,
      zIndex: "0",
    },
    "& .timeline-article": {
      "width": "100%",
      "height": "100%",
      "position": "relative",
      "overflow": "hidden",
      "margin": "20px 0",

      "& .meta-icon": {
        position: "absolute",
        top: "0",
        left: "50%",
        width: "30px",
        height: "30px",
        marginLeft: "-15px",
        borderRadius: "100%",
        background: "transparent",
        backgroundImage: `url(${pointImage})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      },

      "& .content-left-container, .content-right-container": {
        maxWidth: "44%",
        width: "100%",
      },

      "& .content-left, .content-right": {
        "position": "relative",
        "width": "auto",
        "padding": "27px 25px",
        "& :before": {
          position: "absolute",
          top: "20px",
          fontSize: "23px",
          color: Colors.white,
        },
      },
      "& p": {
        margin: "7px 0 0 0",
        padding: "0",
        fontWeight: "400",
        color: Colors.text,
        fontSize: "1em",
        letterSpacing: "0.06em",
        position: "relative",
      },
      "& a": {
        color: Colors.orange,
        textDecoration: "none",
      },

      "& .content-left-container": {
        "float": "left",
        "textAlign": "right",
        "& .date": {
          width: "100px",
          height: "30px",
          lineHeight: "30px",
          textAlign: "center",
          backgroundColor: Colors.blue,
          color: Colors.white,
          borderRadius: "25px 0 20px 25px",
          display: "inline-block",
        },
      },
      "& .content-right-container": {
        "float": "right",
        "textAlign": "left",
        "& .date": {
          width: "100px",
          height: "30px",
          lineHeight: "30px",
          textAlign: "center",
          backgroundColor: Colors.blue,
          color: Colors.white,
          borderRadius: "0 20px 20px 25px",
          display: "inline-block",
        },
      },
    },
  },
});

export default styles;
