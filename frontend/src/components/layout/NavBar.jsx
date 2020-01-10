import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import "../../App.css";
import MobileMenu from "./MobileMenu/MobileMenu";
import ComputerMenu from "./ComputerMenu/ComputerMenu";
class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Grid style={{paddingBottom:"2rem"}}>
        <Grid.Row columns={1} only="mobile">
          <Grid.Column>
            <MobileMenu />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} only="tablet computer">
          <Grid.Column>
            <ComputerMenu />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default NavBar;
