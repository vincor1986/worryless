import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Layout";
import worryTree from "../img/worry-tree.jpg";

import {
  Container,
  Button,
  Item,
  Header,
  Icon,
  Breadcrumb,
} from "semantic-ui-react";
import { Link } from "../routes";

class Techniques extends Component {
  render() {
    return (
      <Layout>
        <Breadcrumb>
          <Breadcrumb.Section link>
            <Link route="/">Home</Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>Techniques</Breadcrumb.Section>
        </Breadcrumb>
        <br />
        <Container fluid>
          <br />
          <Container style={{ backgroundColor: "#a7e9dc", height: "200px" }}>
            <br />
            <Header as="h2" icon textAlign="center">
              <Icon name="user md" />
              Techniques to manage worry
              {/* <Header.Subheader>
                Use these expert psychological techniques to get excessive
                worrying under control
              </Header.Subheader> */}
            </Header>
          </Container>
          <br />
          <Item.Group relaxed>
            <hr style={{ border: "2px solid #a7e9dc" }} />
            <Item>
              <Item.Image
                size="large"
                src="https://images.unsplash.com/photo-1501139083538-0139583c060f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              />
              <Item.Content verticalAlign="middle">
                <Item.Header>Worry Time</Item.Header>
                <Item.Description>
                  Some really clever people have worked out that if you spend a
                  small, set amount of time worrying each day in a controlled
                  manner - you can learn to control your worrying. Research
                  shows that doing this everyday can dramatically reduce
                  distress caused by worrying and can even lead to improved
                  performance in exams or at work.
                </Item.Description>
                <Item.Extra>
                  <Link route="/techniques/worry-time">
                    <a>
                      <Button
                        inverted
                        size="large"
                        color="blue"
                        floated="right"
                      >
                        Read more
                      </Button>
                    </a>
                  </Link>
                </Item.Extra>
              </Item.Content>
            </Item>
            <hr style={{ border: "2px solid #a7e9dc" }} />
            <Item>
              <Item.Image
                size="large"
                src="https://images.unsplash.com/photo-1618404526182-d4c3c2af8048?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              />
              <Item.Content verticalAlign="middle">
                <Item.Header>
                  Focusing on a positive vision of the future
                </Item.Header>
                <Item.Description>
                  Sometimes, the negativity bias in all of us gets the better of
                  us. One great way to fight back against our negative biases is
                  to imagine a wonderful future ahead of us. Taking time to
                  envisage a positive future may feel counter-intuitive in the
                  midst of a worry episode - but it can really help to exercise
                  the part of your brain that fights negativity and allows you
                  to see the bright side of life.
                </Item.Description>
                <Item.Extra>
                  <Link route="/techniques/positive-vision">
                    <a>
                      <Button
                        inverted
                        color="blue"
                        size="large"
                        floated="right"
                      >
                        Read more
                      </Button>
                    </a>
                  </Link>
                </Item.Extra>
              </Item.Content>
            </Item>
            <hr style={{ border: "2px solid #a7e9dc" }} />
            <Item>
              <Item.Image
                size="large"
                src="https://images.unsplash.com/photo-1475319122043-5ca9eeceefaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=800"
              />
              <Item.Content verticalAlign="middle">
                <Item.Header>Getting closer to God</Item.Header>
                <Item.Description>
                  When times are hard and there are difficulties in your life,
                  your faith can give you the strength and spiritual peace to
                  move forward. Whether studying religious texts, engaging in
                  prayer or just getting closer to God - religion helps people
                  deal with their worries when things get really difficult.
                </Item.Description>
                <Item.Extra>
                  <Link route="/techniques/faith">
                    <a>
                      <Button
                        inverted
                        color="blue"
                        size="large"
                        floated="right"
                      >
                        Read more
                      </Button>
                    </a>
                  </Link>
                </Item.Extra>
              </Item.Content>
            </Item>
            <hr style={{ border: "2px solid #a7e9dc" }} />
            <Item>
              <Item.Image
                size="large"
                src="https://images.unsplash.com/photo-1594312915251-48db9280c8f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              />
              <Item.Content verticalAlign="middle">
                <Item.Header>Learn something</Item.Header>
                <Item.Description>
                  Whether you are learning something completely new, brushing up
                  on old skills or developing your skillset - learning is a
                  great distraction and leaves you feeling better prepared for
                  life. It's a great way to get out of a worry cycle because it
                  encourages you to see new opportunities and it exercises your
                  mind in a healthy, productive way.
                </Item.Description>
                <Item.Extra>
                  <Link route="/techniques/learning">
                    <a>
                      <Button
                        inverted
                        color="blue"
                        size="large"
                        floated="right"
                      >
                        Read more
                      </Button>
                    </a>
                  </Link>
                </Item.Extra>
              </Item.Content>
            </Item>
            <hr style={{ border: "2px solid #a7e9dc" }} />
            <Item>
              <Item.Image
                size="large"
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80"
              />
              <Item.Content verticalAlign="middle">
                <Item.Header>Externalising</Item.Header>
                <Item.Description>
                  The stress of worrying is at its worst when you've got a
                  million negative thoughts rushing through your mind. In this
                  whirlwind of worry, it can be really hard to think straight. A
                  really useful technique for managing this problem is to make a
                  comprehensive list of your worries. You can get your worries
                  out of your head and try to forget about them, leaving them
                  for another time. This can help to provide some relief from
                  heavy episodes of worry.
                </Item.Description>
                <Item.Extra>
                  <Link route="/techniques/externalising">
                    <a>
                      <Button
                        inverted
                        color="blue"
                        size="large"
                        floated="right"
                      >
                        Read more
                      </Button>
                    </a>
                  </Link>
                </Item.Extra>
              </Item.Content>
            </Item>
            <hr style={{ border: "2px solid #a7e9dc" }} />
            <Item>
              <Item.Image
                size="large"
                src={worryTree.src}
                style={{ border: "1px solid lightgrey" }}
              />
              <Item.Content verticalAlign="middle">
                <Item.Header>Problem solving framework</Item.Header>
                <Item.Description>
                  One way to put worries into perspective is to employ a problem
                  solving framework. This can help to give you a structure that
                  you can rely on to tell you whether it is worth worrying about
                  something or not. Many people find this problem solving
                  framework really helpful as it allows them not to sweat the
                  small stuff and helps them realise that there is no use in
                  worrying about things that are out of their control.
                </Item.Description>
                <Item.Extra>
                  <Link route="/techniques/problem-solving">
                    <a>
                      <Button
                        inverted
                        color="blue"
                        size="large"
                        floated="right"
                      >
                        Read more
                      </Button>
                    </a>
                  </Link>
                </Item.Extra>
              </Item.Content>
            </Item>
            {/* <hr style={{ border: "2px solid #a7e9dc" }} /> */}
          </Item.Group>
        </Container>
        <br />
      </Layout>
    );
  }
}

export default Techniques;
