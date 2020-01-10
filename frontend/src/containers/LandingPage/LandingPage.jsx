import React, { Component } from "react";
import { Grid, Image, Segment, Header, Divider, Icon } from "semantic-ui-react";
import "../../App.css";

class About extends Component {
  render() {
    return (
      <div>
        <Grid centered columns={1}>
          <Grid.Column centered>
            <Image centered src="photo1.jpg" size="medium" circular />
          </Grid.Column>

          <div className="ui fourteen wide tablet twelve wide computer fourteen wide mobile column centered">
            <Segment raised inverted color="grey" style={{ opacity: "0.5" }}>
              <Grid columns={1} centered>
                <Grid.Row only="mobile">
                  <Header
                    size="huge"
                    textAlign="center"
                    style={{ color: "white" }}
                  >
                    {" "}
                    <div>Security Engineer</div> <div>Software Developer</div>{" "}
                  </Header>
                </Grid.Row>
              </Grid>

              <Grid columns={1} centered>
                <Grid.Row only="tablet computer">
                  <Header
                    size="huge"
                    textAlign="center"
                    style={{ color: "white" }}
                  >
                    {" "}
                    Security Engineer | Software Developer{" "}
                  </Header>
                </Grid.Row>
                <Grid.Row only="tablet computer"></Grid.Row>
              </Grid>
              <Grid.Row>
                <Divider horizontal style={{ color: "white" }}>
                  <Header as="h4" style={{ color: "white" }}>
                    Tools & Skills
                  </Header>
                </Divider>
              </Grid.Row>

              <Grid columns={2} centered>
                <Grid.Row only="mobile">
                  <div className="ui fourteen wide mobile column centered">
                    <div className="ui two column grid stretched eight wide mobile centered">
                      <div className="ui column eight wide mobile column centered">
                        <div style={{ fontSize: "16px" }}>
                          <strong>Python</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>React</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>JavaScript</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>SQL</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>Docker</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>API</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>SecOps</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>DevOps</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>Git</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>Linux</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>OSX</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>AWS</strong>
                        </div>
                      </div>
                      <div className="ui column eight wide mobile column centered">
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid.Row>

                <Grid.Row only="computer tablet">
                  <div className="ui twelve wide tablet ten wide computer column centered">
                    <div className="ui two column grid stretched four wide tablet four wide computer centered">
                      <div className="ui column four wide tablet four wide computer column centered">
                        <div style={{ fontSize: "16px" }}>
                          <strong>Python</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>React</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>JavaScript</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>SQL</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>Docker</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>API</strong>
                        </div>
                      </div>
                      <div className="ui column eight wide mobile four wide tablet four wide computer column centered">
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                      </div>
                      <div className="ui column eight wide mobile four wide tablet four wide computer column centered">
                        <div style={{ fontSize: "16px" }}>
                          <strong>SecOps</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>DevOps</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>Git</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>Linux</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>OSX</strong>
                        </div>
                        <div style={{ fontSize: "16px" }}>
                          <strong>AWS</strong>
                        </div>
                      </div>
                      <div className="ui column eight wide mobile four wide tablet four wide computer column centered">
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                          <Icon name="star outline" />
                        </div>
                        <div>
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star" />
                          <Icon name="star outline" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid.Row>
              </Grid>
            </Segment>
          </div>
        </Grid>
      </div>
    );
  }
}
export default About;
