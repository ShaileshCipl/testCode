import { css } from "glamor";
import { Colors, Metrics } from "../../theme";

const styles = css({
  "margin": "auto",
  "maxWidth": "360px",
  "padding": `${Metrics.xl} 0`,
  "& .text-center": {
    "textAlign": "center",
    "& .box-title": {
      fontSize: "1.625em",
      fontWeight: "500",
      color: Colors.text,
      letterSpacing: "0.15em",
      margin: `${Metrics.medium} auto`,
    },
    "& .box-text": {
      fontSize: "1.063em",
      color: Colors.lightContentText,
      letterSpacing: "0.06em",
      lineHeight: "1.75em",
    },
    "& .box-logo": {
      maxHeight: "100px",
    },
  },

});
export default styles;
