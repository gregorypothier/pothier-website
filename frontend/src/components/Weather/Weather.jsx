import React from "react";
import { Header, Grid, Image, Dimmer, Loader } from "semantic-ui-react";
import "./Weather.css";

const Weather = props => {
  {
    /* If props data is empty/null, return a loading spinner */
  }
  console.log(props.data.news)
  if (props.data.news[9].data.length === 0) {
    return (
      <div>
        <Dimmer active inverted>
          <Loader active inline="centered" size="mini" inverted></Loader>
        </Dimmer>
      </div>
    );
  }

  {
    /* Set the weather variables to be used */
  }
  var data = props.data.news[9].data[0].data[0];
  const city_name = data["city_name"];
  let temp = data["temp"];
  let wicon = data["ico"];
  let day = data["day"];

  const forecast = props.data.news[8].data[0].data;
  let f = [];
  let count = 0;

  {
    /* Map over forecast data and save to f array */
  }
  Object.entries(forecast).map((item, key) => {
    f[count] = {
      day: item[1].day,
      temp: item[1].temp,
      wicon: item[1].ico
    };
    count++;
    return f;
  });

  {
    /* Set up the weather icons to use */
  }
  const weathericon = icon => {
    if (icon !== undefined && icon !== "") {
      const temp = icon;
      const images = require.context("../../assets/icons", true);
      const weatherimage = images("./" + temp + ".svg");
      const image = (
        <Image
          src={weatherimage}
          alt={"Current Conditions"}
          size="tiny"
          centered
        />
      );
      return image;
    }
  };

  return (
    <Grid centered columns={1} className="weather-background">
      <Grid.Row centered>
        <Grid.Column textAlign="left">
          <Header size="small" style={{ margin: "0" }}>
            {city_name}
          </Header>
          <div>{day}</div>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <div>{weathericon(wicon)}</div>
          <div className="weather-icon">{temp}</div>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered columns={3} divided>
        <Grid.Column textAlign="center">
          <div>{weathericon(f[0].wicon)}</div>
          <div>{f[0].temp}</div>
          <div>{f[0].day}</div>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <div>{weathericon(f[1].wicon)}</div>
          <div>{f[1].temp}</div>
          <div>{f[1].day}</div>
        </Grid.Column>
        <Grid.Column textAlign="center">
          <div>{weathericon(f[2].wicon)}</div>
          <div>{f[2].temp}</div>
          <div>{f[2].day}</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Weather;
