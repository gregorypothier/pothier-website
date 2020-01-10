import React, { Component } from "react";
import {
  Image,
  Card,
  Icon,
  Label,
  Button,
  Modal,
  Dimmer,
  Segment,
  Header
} from "semantic-ui-react";
import "./Cards.css";
class Cards extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const data = this.props;
    const content = <Image src={data.image[0]} alt={data.label} height={200} />;
    const modalcontent = 
    <div className="ui two column grid padded ">
      <div className="ui sixteen wide tablet fourteen wide computer column">
        <div className="ui two column grid  stackable">
          <div className="column sixteen wide tablet eight wide computer column">
            {Object.entries(data.image).map((image1, v) => {
              // console.log(image1[1]);
              return (
                <div key={v}>
                  <Image
                    size="huge"
                    rounded
                    src={image1[1]}
                    alt={data.label}
                    style={{ padding: "1rem 1rem 1rem 1rem" }}
                  />
                </div>
              );
            })}
          </div>
          <div className="column sixteen wide tablet eight wide computer column">
            {Object.entries(data.modaldescription).map(
              (description, v) => {
                return <div key={v}>{description[1]}</div>;
              }
            )}
          </div>
        </div>
      </div>
    </div>

    return (
      <div>
        <Card
          raised
          centered
          color={data.color}
          style={{ background: "whitesmoke" }}
        >
          <Dimmer.Dimmable
            dimmed={active}
            dimmer={{ active, content }}
            onMouseEnter={this.handleShow}
            onMouseLeave={this.handleHide}
          >
            <div>{content}</div>
            <Dimmer active={active} onClickOutside={this.handleHide}>
              <Header as="h2" icon inverted>
                <Modal
                  large
                  trigger={
                    <div>
                      <Icon name="external" />
                      <div>More Info</div>
                    </div>
                  }
                  closeIcon
                >
                  <Modal.Header>{data.label}</Modal.Header>
                  {modalcontent}
                </Modal>
              </Header>
            </Dimmer>
          </Dimmer.Dimmable>

          <Card.Content>
            <Label size="big" as="div" color={data.color} ribbon>
              {data.label}
            </Label>
            <Card.Meta>{data.meta}</Card.Meta>
            <Card.Description>{data.description}</Card.Description>
          </Card.Content>

          <Card.Content extra style={{ background: "white" }}>
            {/* Map over the development buttons and display them */}
            {Object.entries(data.buttons).map((button_name, button_key) => {
              let name = `${button_name[1]}`;
              return (
                <Button
                  basic
                  size="mini"
                  labelPosition="right"
                  key={button_key}
                  color="grey"
                  basic
                >
                  <Label as="div" image basic>
                    <img
                      src={`${name}.jpg`}
                      alt="developed with {button_name[1]}"
                      height={10}
                    />
                    <div>{name}</div>
                  </Label>
                </Button>
              );
            })}
          </Card.Content>
          <Card.Content extra style={{ background: "white" }}>
            <div>
              <Button
                disabled={data.githublink}
                size="mini"
                labelPosition="right"
              >
                <Label as="a">
                  <Icon name="github" size="large" color="black" />
                  Source
                </Label>
              </Button>

              <Modal
                large
                trigger={
                  <Button floated="right" size="mini" labelPosition="right">
                    <Label as="a" icon>
                      <Icon
                        name="external alternate"
                        size="large"
                        color="black"
                      />
                      <div className="button-text">More Info</div>
                    </Label>
                  </Button>
                }
                closeIcon
              >
                <Modal.Header>{data.label}</Modal.Header>
                {modalcontent}
              </Modal>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
export default Cards;
