import React from "react";
import Layout from "../../components/Layout";
import { Link } from "../../routes";
import {
  Container,
  Image,
  Segment,
  Header,
  Breadcrumb,
  List,
  Icon,
  Message,
} from "semantic-ui-react";

const External = () => {
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
          <Breadcrumb.Section link>
            <Link route="/techniques">
              <a>Techniques</a>
            </Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider />
          <Breadcrumb.Section active>Externalising</Breadcrumb.Section>
        </Breadcrumb>
        <br />
        <Header size="huge">Externalising</Header>
        <hr style={{ border: "2px solid #a7e9dc" }} />
        <br />
        <Segment>
          <Image
            src="https://images.unsplash.com/photo-1530910417612-701222d79f2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            fluid
          />
          <h4>
            One of the problems with worrying so much is that you can find
            yourself swimming in worries.
          </h4>
          <h4>
            A great way to overcome a torrent of worries is to write them down!
            This is especially useful when a swarm of worries is taking over
            your thoughts and things seem really intense.
          </h4>
          <h4>This works for several reasons:</h4>
          <List>
            <List.Item as="a">
              <Icon name="right triangle" size="small" />
              <List.Content>
                <List.Header>
                  You can get the worry out of your mind
                </List.Header>
                <br />
                <List.Description>
                  Being able to put it down on paper gives your brain a chance
                  to forget about the worry for some amount of time. Because it
                  is written down and you can look at it later, it gives your
                  brain permission to forget about the worry until a later time
                  when you may see things differently or have a solution to the
                  problem.
                </List.Description>
              </List.Content>
            </List.Item>
            <br />
            <List.Item as="a">
              <Icon name="right triangle" size="small" />
              <List.Content>
                <List.Header>You can see the problem more clearly</List.Header>
                <br />
                <List.Description>
                  Putting the worry down in concise words will force your brain
                  to break the problem down into logical chunks. You may find
                  yourself re-writing the worry as you re-organise your thoughts
                  and try to undersand what you are thinking and feeling. By
                  going through the process, you are destructuring the problem,
                  and this may help you to better understand the issue or to see
                  things differently by the time you're finished.
                </List.Description>
              </List.Content>
            </List.Item>
            <br />
            <List.Item as="a">
              <Icon name="right triangle" size="small" />
              <List.Content>
                <List.Header>You can review previous worries</List.Header>
                <br />
                <List.Description>
                  Sometimes, when you revisit previous worries, you realise that
                  you had nothing to worry about. It can be difficult to realise
                  that worry is unhelpful if we constantly move from one worry
                  to another. However, by reviewing worries from last week, last
                  month or even last year - we can often see that we were
                  worried about something trivial and we can learn through
                  experience that our worry didn't help us in the past and
                  therefore perhaps it isn't helping us now.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
        <Header size="huge">Further tips</Header>
        <hr style={{ border: "2px solid #a7e9dc" }} />
        <br />
        <p>
          If you find this helpful, you may want to keep a worry diary or a
          journal. Knowing that you will regularly be offloading your worries
          can be a real relief and can empower you to destructure worries
          quicker knowing that you will do so later anyway.
        </p>
        <p>
          If you are finding it difficult not to worry, even after you have
          written things down, you may find{" "}
          <Link route="/techniques/worry-time">
            <a>worry time</a>
          </Link>{" "}
          really useful. It's a technique that can help you to delay and
          ultimately control your ability to choose when to worry.
        </p>
        <br />
        <Message color="teal">
          <h2>The power of externalising</h2>
          <p>
            "When your brain is bursting with worries, write them down. Release
            all those cooped-up worries from the corners of your mind, and let
            the paper deal with them. By writing down your worries, you feel as
            though you’re emptying your brain, and you feel lighter and less
            tense."
          </p>
          <a href="https://psychcentral.com/blog/9-ways-to-ward-off-your-worries#3">
            9 Ways to Ward Off Your Worries - psychcentral.com
          </a>
          <p>
            "…spend eight to 10 minutes writing out your worries. When you do,
            your worry is less likely to get in your way, and you will likely
            complete tasks more easily, with your worries out of your brain and
            on the task at hand instead."
          </p>
          <a href="https://www.health.harvard.edu/blog/write-your-anxieties-away-2017101312551">
            health.harvard.edu
          </a>
        </Message>
        <br />
        <hr style={{ border: "2px solid #a7e9dc" }} />
      </Container>
      <br />
    </Layout>
  );
};

export default External;
