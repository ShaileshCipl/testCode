import { css } from "glamor";
import { Colors, Metrics } from "../../../theme";
// make css rules
const styles = css({
  "backgroundColor": Colors.white,
  "& .box-block": {
    "padding": `calc(${Metrics.base}*4) 0`,
    "@media (max-width:500px)": {
      backgroundColor: Colors.white,
    },
  },
  "& .timeline-block": {
    "padding": `calc(${Metrics.base}*4) 0`,
    "& h1": {
      textAlign: "center",
      width: "100%",
    },
  },
  "& .team-block": {
    "backgroundColor": "#edf2f7",
    "padding": `calc(${Metrics.xl}*4) 0`,
    "textAlign": "center",
    "& h1": {
      width: "100%",
    },
    "& .join-btn": {
      width: "100%",
      margin: "0 40%",
    },
  },
  "& .investors-block": {
    "textAlign": "center",
    "& h1": {
      width: "100%",
    },
    "padding": `${Metrics.xl} 0`,
    "@media (max-width:500px)": {
      backgroundColor: "#f0f2f2",
    },
  },
});

export default styles;
export const bannerStyles = css({
  "backgroundSize": "cover",
  "backgroundPosition": " 90%",
  "padding": "0",
  "height": "429px",
  "textAlign": "left",
  "& .bannerContent": {
    "& .heading": {
      "color": "rgba(255, 255, 255, 1)",
      "fontSize": "1.2em",
      "fontWeight": "500",
      "margin": " 0 auto 20px auto",
      "@media (max-width:767px)": {
        width: "90%",
        margin: "0 auto 20px",
        padding: "20px 0 0",
      },
      "@media (max-width:1199px)": {
        maxWidth: "960px",
      },
      "@media (max-width:991px)": {
        maxWidth: "750px",
      },
      "@media (min-width:1199px)": {
        maxWidth: "1140px",
      },
    },
    "& .sub-heading": {
      "color": "rgba(255, 255, 255, 1)",
      "fontSize": "1em",
      "wordWrap": "break-word",
      "margin": "auto",
      "@media (max-width:767px)": {
        width: "100%",
        background: "#0000004f",
        position: "absolute",
        bottom: "0",
        padding: "20px",
      },
      "@media (max-width:1199px)": {
        maxWidth: "960px",
      },
      "@media (max-width:991px)": {
        maxWidth: "750px",
      },
      "@media (min-width:1199px)": {
        maxWidth: "1140px",
      },
    },
    "@media (max-width:767px)": {
      verticalAlign: "top",
      paddingLeft: "0px",
    },

  },
  "@media (max-width:767px)": {
    position: "relative",
  },
});
