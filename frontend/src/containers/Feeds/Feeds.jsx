import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { List, Header, Pagination } from "semantic-ui-react";
//import Truncate from "react-truncate";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Feeds.css";

class Feeds extends React.Component {
  state = {
    newsIndex: 0,
    items: Array.from({ length: 20 }),
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.items.length >= 500) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: 30 }))
      });
    }, 500);
  };

  favicon(icon) {
    if (icon !== undefined && icon !== "") {
      const temp = icon;
      const images = require.context("../../assets/icons", true);
      const defImage = images("./" + temp + ".ico");
      const image = <img src={defImage} alt={defImage} className="tab-icons" />;
      return image;
    }
  }

  render() {
    var data = this.props.data.news;
    console.log(data);
    // return list of tab titles to populate the tab panel
    const title = Object.entries(data).map((item, key) => {
      if (item[1].name === this.props.name) {
        // console.log(item[1]);
        return Object.entries(item[1].data).map((titleName, v) => {
          // console.log(titleName[1].name);
          let titleNameFormatted = titleName[1].name.split(/(\s+)/).map(j => (
            <div key={j}>
              <b>{j}</b>
            </div>
          ));
          return (
            <Tab>
              <div title={titleName[1].title} className="tab-headers">
                {this.favicon(`${titleName[1].ico}`)}
                <div>{titleNameFormatted}</div>
              </div>
            </Tab>
          );
        });
      }
    });

    // map throught state, if index selected matches then render that list of items
    const text = Object.entries(this.props.data.news).map((item, key) => {
      if (item[1].name === this.props.name) {
        return (
          <div key={key}>
            <List selection divided relaxed>
              {Object.entries(item[1].data).map((SelectedTabIndex, v) => {
                // this is where we match array to pull that matches the tab clicked (set in state)
                if (Number(SelectedTabIndex[0]) === this.state.newsIndex) {
                  // this is where we map across the titles array for the item selected
                  return Object.entries(SelectedTabIndex[1].data)
                    .slice()
                    .map((sourceData, b) => {
                      return (
                        <List.Item key={sourceData[1].id}>
                          <a
                            href={sourceData[1].link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="feed-title">
                              {sourceData[1].title}
                            </div>
                          </a>
                        </List.Item>
                      );
                    });
                }
              })}
            </List>
          </div>
        );
      }
    });

    //return the feeds populated with title tabs and feed content
    let feeds = (
      <Tabs
        selectedIndex={this.state.newsIndex}
        onSelect={newsIndex => this.setState({ newsIndex })}
      >
        <TabList>
          <div>
            <b>
              <span className="tab-title">{this.props.name}</span>
            </b>
            {title}
          </div>
        </TabList>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          height={400}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div> {text}</div>
        </InfiniteScroll>
      </Tabs>
    );

    return feeds;
  }
}

export default Feeds;
