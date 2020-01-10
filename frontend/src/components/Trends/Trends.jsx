import React from "react";
import { Header, Grid, Button } from "semantic-ui-react";
import "./Trends.css";

const trends = props => {
  // console.log(props);
  var data = props.data.news;
  // console.log(data);

  const title = Object.entries(data).map((item, key) => {
    if (item[1].name === "trends") {
      return Object.entries(item[1].data).map((k, v) => {
        // console.log(k[1].data);
        return Object.entries(k[1].data).map((j, w) => {
          return (
            <div key={w}>
              <Button
                compact
                size="mini"
                style={{
                  margin: ".25em .25em .25em .25em",
                  padding: ".5em .5em .5em .5em"
                }}
              >
                <a href={j[1].link} target="_blank" rel="noopener noreferrer">
                  {j[1].title}
                </a>
              </Button>
            </div>
          );
        });
      });
    }
  });
  return (
    <Grid centered columns={1} className="trends-background">
      <Grid.Row>
        <Grid.Column textAlign="left">
          <div className="trends-header">
            <Header left size="small">
              Trending
            </Header>
          </div>
        </Grid.Column>
        <Grid.Column stackable="true">{title}</Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default trends;
