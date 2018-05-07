import Link from "gatsby-link";
import { css } from "glamor";
import * as React from "react";
import { Col, Container, Hidden, Row } from "react-grid-system";
import { InjectedIntlProps, injectIntl } from "react-intl";
import { connect } from "react-redux";
import * as Fade from "react-reveal/Fade";
import * as Zoom from "react-reveal/Zoom";
import * as Redux from "redux";
import { Banner, BoxContent, Card, Content, PrimaryButton } from "../../../components/";
import { RootState } from "../../../reducers";
import defaultStyles, { bannerStyles } from "./AboutUsStyles";
import * as backgroundUrl from "./assets/banner-image.png";
import * as TimelineImage4 from "./assets/graphic-award.png";
import * as TimelineImage3 from "./assets/graphic-china.png";
import * as TimelineImage1 from "./assets/graphic-welab.png";
import * as TimelineImage2 from "./assets/graphic-welend.png";
import * as boxImage2 from "./assets/icon-data-analytics.png";
import * as boxImage1 from "./assets/icon-innovation.png";
import * as boxImage3 from "./assets/icon-security.png";
// investors images
// tslint:disable-next-line:ordered-imports
import * as investorsImage1 from "./assets/bitmap.png";
import * as investorsImage2 from "./assets/khazanah-logo-300.png";
// tslint:disable-next-line:ordered-imports
import * as investorsImage4 from "./assets/bitmap_1.png";
import * as investorsImage3 from "./assets/ingbank2.png";
import * as investorsImage5 from "./assets/logo_ule-high_res.png";
// tslint:disable-next-line:ordered-imports
import * as investorsImage6 from "./assets/logo_gtfg-high_res.png";
import * as investorsImage7 from "./assets/logo_nan_fung.png";
// tslint:disable-next-line:ordered-imports
import * as investorsImage8 from "./assets/iconiq-logo.png";

import { LeftContent, RightContent, Timeline, TimelineElements } from "./timeline";

/**
 * The properties passed to the component
 */
export interface OwnProps {
  style?: React.CSSProperties;
}
/**
 * The properties mapped from Redux dispatch
 */
export interface DispatchProps {

}

/**
 * The properties mapped from the global state
 */
export interface StateProps {

}

/**
 * The local state
 */
export interface State {

}

type Props = StateProps & DispatchProps & OwnProps & InjectedIntlProps;

class AboutUs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { intl } = this.props;
    return (
      <div {...css(defaultStyles, this.props.style)}>
        <div className="banner-block">
          <Banner
            styles={bannerStyles}
            background={backgroundUrl}
            heading={intl.messages.aboutUsBannerTitle}
            subHeading={intl.messages.aboutUsBannerContent}
          />
        </div>
        <div className="box-block">
          <Container fluid={true}>
            <Row>
              <Col md={4} sm={12} xs={12} >
                <Fade bottom={true} duration={1000}>
                  <BoxContent title={intl.messages.boxTitle1} iconImage={boxImage1}>
                    {intl.messages.boxContent1}
                  </BoxContent>
                </Fade>
              </Col>
              <Col md={4} sm={12} xs={12} >
                <Fade bottom={true} duration={1000}>
                  <BoxContent title={intl.messages.boxTitle2} iconImage={boxImage2}>
                    {intl.messages.boxContent2}
                  </BoxContent>
                </Fade>
              </Col>
              <Col md={4} sm={12} xs={12} >
                <Fade bottom={true} duration={1000}>
                  <BoxContent title={intl.messages.boxTitle3} iconImage={boxImage3}>
                    {intl.messages.boxContent3}
                  </BoxContent>
                </Fade>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="investors-block">
          <Container>
            <Row>
              <Zoom duration={1500}>
                <h1> {intl.messages.aboutUsInvestorTitle}</h1>
                <Content>{intl.messages.aboutUsInvestorContent}</Content>
              </Zoom>
            </Row>
            <Row>

              <Col md={3} sm={4} xs={6}>
                <Zoom duration={1500}> <img src={investorsImage1} /></Zoom>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <Zoom duration={1500}> <img src={investorsImage2} /></Zoom>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <Zoom duration={1500}> <img src={investorsImage3} /></Zoom>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <Zoom duration={1500}> <img src={investorsImage4} /></Zoom>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <Zoom duration={1500}> <img src={investorsImage5} /></Zoom>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <Zoom duration={1500}> <img src={investorsImage6} /></Zoom>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <Zoom duration={1500}> <img src={investorsImage7} /></Zoom>
              </Col>
              <Col md={3} sm={4} xs={6}>
                <Zoom duration={1500}> <img src={investorsImage8} /></Zoom>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="timeline-block">
          <Container>
            <Row>
              <Zoom duration={1200}>
                <h1>{intl.messages.timelineHeading}</h1>
              </Zoom>
            </Row>
            <Row style={{ margin: "0" }}>

              <Timeline>
                <TimelineElements>
                  <Fade left={true} duration={1500}>
                    <LeftContent>
                      <div className="date">{intl.messages.jan2013}</div>
                      <div><p>{intl.messages.jan2013Text}</p></div>
                      <Link to={`/`}>{intl.messages.jan2013Link}</Link>
                    </LeftContent>
                  </Fade>
                  <Fade right={true} duration={1500}>
                    <RightContent>
                      <img src={TimelineImage1} />
                    </RightContent>
                  </Fade>
                </TimelineElements>
                <TimelineElements>
                  <Fade left={true} duration={1500}>
                    <LeftContent>
                      <img src={TimelineImage2} />
                    </LeftContent>
                  </Fade>
                  <Fade right={true} duration={1500}>
                    <RightContent>
                      <div className="date">{intl.messages.jul2013}</div>
                      <div><p>{intl.messages.jul2013Text}</p></div>
                    </RightContent>
                  </Fade>
                </TimelineElements>
                <TimelineElements>
                  <Fade left={true} duration={1500}>
                    <LeftContent>
                      <div className="date">{intl.messages.aug2014}</div>
                      <div><p>{intl.messages.aug2014Text}</p></div>
                    </LeftContent>
                  </Fade>
                  <Fade right={true} duration={1500}>
                    <RightContent>
                      <img src={TimelineImage3} />
                    </RightContent>
                  </Fade>
                </TimelineElements>
                <TimelineElements>
                  <Fade right={true} duration={1500}>
                    <RightContent>
                      <div className="date">{intl.messages.jan2015}</div>
                      <div><p>{intl.messages.jan2015Text}</p></div>
                    </RightContent>
                  </Fade>
                </TimelineElements>
                <TimelineElements>
                  <Fade left={true} duration={1500}>
                    <LeftContent>
                      <div className="date">{intl.messages.jan2016}</div>
                      <div><p>{intl.messages.jan2016Text}</p></div>
                    </LeftContent>
                  </Fade>
                </TimelineElements>
                <TimelineElements>
                  <Fade left={true} duration={1500}>
                    <LeftContent>
                      <img src={TimelineImage4} />
                    </LeftContent>
                  </Fade>
                  <Fade right={true} duration={1500}>
                    <RightContent>
                      <div className="date">{intl.messages.jul2016}</div>
                      <div><p>{intl.messages.jul2016Text}</p></div>
                    </RightContent>
                  </Fade>
                </TimelineElements>
                <TimelineElements>
                  <Fade left={true} duration={1500}>
                    <LeftContent>
                      <div className="date">{intl.messages.nov2017}</div>
                      <div><p>{intl.messages.nov2017Text}</p></div>
                    </LeftContent>
                  </Fade>
                </TimelineElements>
              </Timeline>
            </Row>
          </Container>
        </div>
        <div className="team-block">
          <Container>
            <Row>
              <Fade bottom={true} duration={2000}>
                <h1>{intl.messages.aboutUsTeamTitle}</h1>
                <Content>{intl.messages.aboutUsTeamContent}</Content>
                <div className="join-btn"><PrimaryButton>{intl.messages.aboutUsTeamBtn}</PrimaryButton></div>
              </Fade>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default injectIntl(AboutUs) as React.ComponentClass<OwnProps>;
