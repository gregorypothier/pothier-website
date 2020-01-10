import React, { Component } from "react";
import {
  Menu,
  Segment,
  Icon,
  Grid,
  Container,
  Sticky
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./MobileMenu.css";
import { slide as BurgerMenu } from "react-burger-menu";

class MobileMenu extends Component {
  state = { activeItem: "home" };

  render() {
    var styles = {
      bmBurgerButton: {
        position: "fixed",
        width: "16px",
        height: "16px",
        left: "20px",
        top: "33px"
      },
      bmBurgerBars: {
        background: "#383838"
      },
      bmBurgerBarsHover: {
        background: "#a90000"
      },
      bmCrossButton: {
        height: "24px",
        width: "24px"
      },
      bmCross: {
        background: "#bdc3c7"
      },
      bmMenuWrap: {
        position: "fixed",
        height: "100%"
      },
      bmMenu: {
        background: "white",
        padding: "0",
        fontSize: "1.15em"
      },
      bmMorphShape: {
        fill: "#373a47"
      },
      bmItemList: {
        color: "black",
        padding: "0.8em",
        paddingTop: "2em"
      },
      bmItem: {
        color: "black"
      },
      bmOverlay: {
        background: "rgba(0, 0, 0, 0.3)"
      }
    };

    return (
      <Menu pointing secondary>
        <BurgerMenu styles={styles}>
          <Menu.Item as={NavLink} exact to="/" name="home">
            <div className="navbar-items-mobile">Home</div>
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to="about"
            name="about"
            path="/about"
            onClick={this.handleItemClick}
          >
            <div className="navbar-items-mobile">About Me</div>
          </Menu.Item>
          <Menu.Item as={NavLink} to="news" name="news">
            <div className="navbar-items-mobile">News</div>
          </Menu.Item>
          <Menu.Item as={NavLink} to="projects" name="projects">
            <div className="navbar-items-mobile">Projects</div>
          </Menu.Item>
          <div className="mobile-menu-inline">
            <Menu.Item
              href="https://linkedin.com/in/gregorypothier"
              title="Connect with me on Linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="linkedin" size="large" color="blue" />
              <div className="navbar-items-mobile">My LinkedIn</div>
            </Menu.Item>
          </div>
          {/*
          <div className="mobile-menu-inline">
            <Menu.Item
              href="https://gitlab.com/gpothier"
              title="Fork me on Gitlab"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="gitlab" size="large" color="orange" />
              <div className="navbar-items-mobile">My GitLab</div>
            </Menu.Item>
          </div>
          */}
          <div className="mobile-menu-inline">
            <Menu.Item
              href="https://github.com/gregorypothier"
              title="Fork me on Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" size="large" color="black" />
              <div className="navbar-items-mobile">My GitHub</div>
            </Menu.Item>
          </div>
        </BurgerMenu>

        <Menu.Menu position="right"></Menu.Menu>
      </Menu>
    );
  }
}
export default MobileMenu;
