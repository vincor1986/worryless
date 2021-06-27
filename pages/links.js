import React, { Component } from "react";
import Layout from "../components/Layout";
import {
  Breadcrumb,
  Container,
  Header,
  Select,
  Segment,
  Card,
  Icon,
} from "semantic-ui-react";
import { Link } from "../routes";

const countryOptions = [
  { key: "au", value: "au", text: "Australia" },
  { key: "ca", value: "ca", text: "Canada" },
  { key: "nz", value: "nz", text: "New Zealand" },
  { key: "uk", value: "uk", text: "United Kingdom" },
  { key: "us", value: "us", text: "United States" },
];

class Links extends Component {
  state = {
    region: "",
  };

  renderCards = () => {
    switch (this.state.region) {
      case "Australia":
        return (
          <Container>
            <br />
            <Card.Group>
              <br />
              <Card>
                <Card.Content
                  header="Headspace"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.headspace.org.au/">
                      <a>headspace.org.au</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  1800 650 890
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="Lifeline Australia"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.lifeline.org.au/">
                      <a>lifeline.org.au</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: 0477 13 11 14</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  13 11 14
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="All Hours Suicide Support Service"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.ontheline.org.au/">
                      <a>ontheline.org.au</a>
                    </Link>
                  </p>
                  <p>
                    Email:{" "}
                    <Link route="mailto:AHS@ontheline.org.au">
                      <a>AHS@ontheline.org.au</a>
                    </Link>
                  </p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  1800 859 858
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="MensLine"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.mensline.org.au/">
                      <a>mensline.org.au</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  1300 78 99 78
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="Qlife"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.qlife.org.au/">
                      <a>qlife.org.au</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  1800 184 527
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        );

      case "Canada":
        return (
          <Container>
            <br />
            <Card.Group>
              <br />
              <Card>
                <Card.Content
                  header="Wellness Together Canada"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.wellnesstogether.ca/en-ca/">
                      <a>wellnesstogether.ca/en-ca/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: WELLNESS to 741741</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  1-866-585-0445
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="Hope for Wellness"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.hopeforwellness.ca/">
                      <a>hopeforwellness.ca/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  1-855-242-3310
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="Crisis Services Canada"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.crisisservicescanada.ca/en/">
                      <a>crisisservicescanada.ca/en/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: 45645</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  1-833-456-4566
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="eMental Health"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.ementalhealth.ca/">
                      <a>ementalhealth.ca/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  n/a
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        );
      case "New Zealand":
        return (
          <Container>
            <br />
            <Card.Group>
              <Card>
                <Card.Content
                  header="Lifeline New Zealand"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.lifeline.org.nz/">
                      <a>lifeline.org.nz/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: HELP to 4357</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  0800 543 354
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="Healthline"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>Website: n/a</p>
                  <p>Email: n/a</p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  0800 611 116
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="Samaritans"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.samaritans.org.nz/">
                      <a>samaritans.org.nz/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  0800 72 66 66
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        );

      case "United Kingdom":
        return (
          <Container>
            <br />
            <Card.Group>
              <Card>
                <Card.Content
                  header="Samaritans"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.samaritans.org/">
                      <a>samaritans.org/</a>
                    </Link>
                  </p>
                  <p>
                    Email:{" "}
                    <Link route="mailto:jo@samaritans.org">
                      <a>jo@samaritans.org</a>
                    </Link>
                  </p>
                  <p>Text: SHOUT to 85258</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  116 123
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="Mind Infoline (signposting)"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.mind.org.uk/information-support/helplines/">
                      <a>mind.org.uk/</a>
                    </Link>
                  </p>
                  <p>
                    Email:{" "}
                    <Link route="mailto:info@mind.org.uk">
                      <a>info@mind.org.uk</a>
                    </Link>
                  </p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  0300 123 3393
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="CALM (for men)"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.thecalmzone.net/help/get-help/">
                      <a>thecalmzone.net/help/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  0800 58 58 58
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="NHS 111"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.111.nhs.uk/">
                      <a>111.nhs.uk/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  111
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        );
      case "United States":
        return (
          <Container>
            <br />
            <Card.Group>
              <Card>
                <Card.Content
                  header="National Suicide Prevention Lifeline"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="http://www.suicidepreventionlifeline.org/">
                      <a>suicidepreventionlifeline.org/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: HELLO to 741741</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  1-800-273-TALK (8255)
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="Disaster Distress Helpline"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="https://www.samhsa.gov/find-help/disaster-distress-helpline">
                      <a>samhsa.gov/find-help/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: 1-800-985-5990</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  1-800-985-5990
                </Card.Content>
              </Card>
              <Card>
                <Card.Content
                  header="Substance Abuse and Mental Health Services Administration (SAMHSA)"
                  style={{ backgroundColor: "#bcf5ef" }}
                />
                <Card.Content>
                  <p>
                    Website:{" "}
                    <Link route="https://www.samhsa.gov/">
                      <a>samhsa.gov/</a>
                    </Link>
                  </p>
                  <p>Email: n/a</p>
                  <p>Text: n/a</p>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="phone" />
                  1-800-622-HELP (4357)
                </Card.Content>
              </Card>
            </Card.Group>
          </Container>
        );
      default:
        return (
          <Segment>
            <h4>Please select a region to show contact information.</h4>
          </Segment>
        );
    }
  };

  render() {
    return (
      <Layout>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Section link>
              <Link route="/">
                <a>Home</a>
              </Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>Find support</Breadcrumb.Section>
          </Breadcrumb>
          <br />
          <Header size="huge">Find Support</Header>
          <hr style={{ border: "2px solid #a7e9dc" }} />
          <br />
          <p>
            In this section, you can find links, contact information and details
            about support offered in your region.
          </p>
          <p>
            {" "}
            <strong>Please note:</strong> these resources are not intended to
            replace medical care and if you are struggling with worry or any
            mental health condition it is strongly recommended that you seek
            medical advice from your doctor or a healthcare professional.
          </p>
          <br />
          <h3>Please select your region:</h3>
          <Select
            onChange={(e) => this.setState({ region: e.target.innerText })}
            placeholder="region"
            options={countryOptions}
          />
          <br />
          <br />
          <hr style={{ border: "2px solid #a7e9dc" }} />
          {this.renderCards()}
        </Container>
        <br />
        <br />
      </Layout>
    );
  }
}

export default Links;
