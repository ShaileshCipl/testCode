import { css } from "glamor";
import { Colors, Metrics } from "../../theme";
// TODO: get value from theme;
const paddingLeft = "20px";
const paddingTop = "30px";
// make css rules
const styles = css({
  "backgroundColor": Colors.white,
  "boxShadow": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
  "borderRadius": Metrics.tiny,
  "paddingTop": Metrics.xl,
  "width": "100%",
  "& .cardTitleStyle": {
    display: "block",
    boxSizing: "border-box",
    borderLeft: `5px solid ${Colors.primary}`,
    paddingLeft: Metrics.base,
    color: Colors.primary,
    fontSize: "1.35rem",
    fontWeight: 500,
  },
});

const cardContentStyles = css({
  display: "block",
  paddingTop: Metrics.xl,
  paddingBottom: Metrics.xl,
  paddingLeft: Metrics.large,
  paddingRight: Metrics.large,
});

export default styles;
export {
  cardContentStyles,
};
