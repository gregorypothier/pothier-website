import React, { Component } from "react";
import { Menu, Segment, Icon, Grid } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./ComputerMenu.css";
class ComputerMenu extends Component {
  render() {
    return (
      <Menu pointing secondary>
        <Menu.Item as={NavLink} exact to="/" name="home">
          <div className="navbar-items">Home</div>
        </Menu.Item>
        <Menu.Item as={NavLink} to="about" name="about" path="/about">
          <div className="navbar-items">About Me</div>
        </Menu.Item>
        <Menu.Item as={NavLink} to="news" name="news">
          <div className="navbar-items">News</div>
        </Menu.Item>
        <Menu.Item as={NavLink} to="projects" name="projects">
          <div className="navbar-items">Projects</div>
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            href="https://linkedin.com/in/gregorypothier"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="navbar-items">
              <Icon name="linkedin" size="large" color="blue" />
            </div>
          </Menu.Item>
          {/*
          <Menu.Item
            href="https://gitlab.com/gpothier"
            title="Fork me on Gitlab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="navbar-items">
              <Icon name="gitlab" size="large" color="orange" />
            </div>
          </Menu.Item>
          */}
          <Menu.Item
            href="https://github.com/gregorypothier"
            title="Fork me on Github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="navbar-items">
              <Icon name="github" size="large" />
            </div>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default ComputerMenu;
