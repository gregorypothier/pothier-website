import React, { Component } from "react";
import { Grid, Header, Segment, Image, Icon } from "semantic-ui-react";
import "./About.css";
class About extends Component {
  render() {
    return (
      <Grid columns={3} stackable padded>
        <Grid.Row stretched>
          <Grid.Column stackable>
            <Segment raised style={{ background: "WhiteSmoke" }}>
              <div>
                <Segment raised compact>
                  <Image src="linkedin.jpg" size="medium" rounded />
                </Segment>
                <Header size="large">Gregory Pothier</Header>
                Hello! Welcome to my website, please make yourself at home and
                browse around. I enjoy{" "}
                <a
                  href="https://www.goodreads.com/review/list/108034927-gp?shelf=currently-reading"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <u>reading</u>
                </a>
                , spending time in nature, cooking, and tinkering with tech.
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised style={{ background: "WhiteSmoke" }}>
              <Header size="medium" color="grey">
                Life's Essentials
              </Header>
              <Grid centered columns={1}>
                <Grid.Column centered>
                  <Icon name="coffee" size="big" />
                  <Icon name="laptop" size="big" />
                  <Icon name="book" size="big" />
                  <Icon name="mobile" size="big" />
                  <Icon name="heart" size="big" />
                  <Icon name="music" size="large" />
                </Grid.Column>
              </Grid>
            </Segment>
            <Segment raised style={{ background: "WhiteSmoke" }}>
              <Header size="medium" color="grey">
                Currently Reading
              </Header>
              <Grid centered columns={3}>
                <Grid.Column centered>
                  <Image src="dda.jpg" size="small" rounded />
                  <div className="title-header">
                    Designing Data-Intensive Apps
                  </div>
                </Grid.Column>
                <Grid.Column centered>
                  <Image src="seriouspython.jpg" size="small" rounded />
                  <div className="title-header">Serious Python</div>
                </Grid.Column>
                <Grid.Column centered>
                  <Image src="securingdevops.jpg" size="small" rounded />
                  <div className="tile-artist">Securing DevOps</div>
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment raised style={{ background: "WhiteSmoke" }}>
              <Header size="medium" color="grey">
                Currently Watching
              </Header>
              <Image src="rickmorty.jpg" size="small" rounded />
              <div className="title-header">Rick & Morty</div>
            </Segment>
            <Segment raised style={{ background: "WhiteSmoke" }}>
              <Header size="medium" color="grey">
                Currently in Rotation
              </Header>
              <Grid centered columns={2}>
                <Grid.Column centered>
                  <Image src="oom.jpg" size="small" rounded />
                  <div className="title-header">Origin of Muse</div>
                </Grid.Column>
                <Grid.Column centered>
                  <Image src="zimmer.jpg" size="small" rounded />
                  <div className="tile-artist">Hans Zimmer</div>
                </Grid.Column>
              </Grid>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default About;
