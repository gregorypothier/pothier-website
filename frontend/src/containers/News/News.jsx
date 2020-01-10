/* eslint-disable */
import React, { Component } from "react";
import "./News.css";
import axios from "axios";
import { Segment } from "semantic-ui-react";
import Feeds from "../Feeds/Feeds.jsx";
import Weather from "../../components/Weather/Weather.jsx";
import Trends from "../../components/Trends/Trends.jsx";

class News extends Component {
  constructor() {
    super();

    this.state = {
      loaded_news: false,
      news: []
    };
  }

  async componentDidMount() {
    //axios.get(`/api/`).then(res => {
      axios.get(`http://localhost:5000/api/`).then(res => {
      this.setState({
        news: res.data.feed
      });
      this.setState({ loaded_news: true });
    });
  }

  render() {
    const data = this.state;
    // console.log(data);
    if (!data.loaded_news) {
      return <p>Loading ...</p>;
    }

    // console.log(data);
    return (
      <div>
        <div className="ui two column grid padded">
          <div className="ui sixteen wide tablet fourteen wide computer column">
            <div className="ui two column grid stretched stackable">
              <div className="column sixteen wide tablet eight wide computer column">
                <Segment raised>
                  {/*begin news panel*/}

                  <Feeds data={data} name="news" />
                  {/*end news panel*/}
                </Segment>
              </div>
              <div className="column sixteen wide tablet eight wide computer column">
                <Segment raised>
                  {/*begin tech panel*/}
                  <Feeds data={data} name="tech" />
                  {/*end tech panel*/}
                </Segment>
              </div>
              <div className="column sixteen wide tablet eight wide computer column">
                <Segment raised>
                  {/*begin news panel*/}
                  <Feeds data={data} name="security" />
                  {/*end news panel*/}
                </Segment>
              </div>
              <div className="column sixteen wide tablet eight wide computer column">
                <Segment raised>
                  {/*begin news panel*/}
                  <Feeds data={data} name="econ" />
                  {/*end news panel*/}
                </Segment>
              </div>
              <div className="column sixteen wide tablet eight wide computer column">
                <Segment raised>
                  {/*begin news panel*/}
                  <Feeds data={data} name="code" />
                  {/*end news panel*/}
                </Segment>
              </div>
              <div className="column sixteen wide tablet eight wide computer column">
                <Segment raised>
                  {/*begin tech panel*/}
                  <Feeds data={data} name="life" />
                  {/*end tech panel*/}
                </Segment>
              </div>
              <div className="column sixteen wide tablet eight wide computer column">
                <Segment raised>
                  {/*begin news panel*/}
                  <Feeds data={data} name="health" />
                  {/*end news panel*/}
                </Segment>
              </div>
            </div>
          </div>
          <div className="ui sixteen wide tablet two wide computer column">
            <div className="ui three column grid  stackable">
              <div className="ui six wide tablet sixteen wide computer column">
                <Segment raised>
                  {/*begin weather component*/}
                  <Weather data={data} />
                  {/*end weather component*/}
                </Segment>
              </div>
              <div className="ui six wide tablet sixteen wide computer column">
                <Segment raised>
                  {/*begin weather component*/}
                  <Trends data={data} />
                  {/*end weather component*/}
                </Segment>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
