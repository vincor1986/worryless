import React from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Breadcrumb,
  Header,
  Segment,
  Image,
  List,
  Icon,
  Message,
} from "semantic-ui-react";
import { Link } from "../../routes";
import worryTree from "../../img/worry-tree.jpg";

const problemSolving = () => {
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
          <Breadcrumb.Section active>
            Problem Solving Framework
          </Breadcrumb.Section>
        </Breadcrumb>
        <br />
        <Header size="huge">Problem Solving Framework</Header>
        <hr style={{ border: "2px solid #a7e9dc" }} />
        <br />
        <Segment>
          <h4>
            Life is full of uncertainties. It can be difficult to keep up with
            all the things to worry about. Trying to solve all these problems
            can be exhausting, especially if you are finding problems where
            there may be none.
          </h4>
          <Image
            src="https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
            size="small"
            floated="right"
          />
          <h4>
            It can be really tempting to consider every possible danger or
            threat, and ruminate on every embarrasing moment or awkward social
            encounter. It is human nature to focus on negative things. We all do
            it. The problem is that when this sort of worrying gets out of hand
            - it can be really hard not to worry about every thing... big and
            small. That can be emotionally and physically exhausting.
          </h4>
          <h4>
            For some people it's possible to just stop worrying about this
            stuff. Some people are naturally able to just keep worrying to the
            things within their control - or only when there is an immediate,
            irrefutable danger.
          </h4>
          <h4>
            However, for many of us, things aren't so simple. Many of us need
            support and guidance to pull away from persistant worrying.
          </h4>
          <h4>That is where the Problem Solving Framework comes in.</h4>
        </Segment>
        <br />
        <Header size="huge">The Worry Tree</Header>
        <hr style={{ border: "2px solid #a7e9dc" }} />
        <br />
        <h4>
          This is the "Worry Tree", from Christina G Hibbert, Psy.D. -{" "}
          <a href="http://www.drchristinahibbert.com">
            www.drchristinahibbert.com
          </a>
        </h4>
        <Image
          src={worryTree.src}
          fluid
          style={{ border: "4px solid #a7e9dc", borderRadius: "20px" }}
        />
        <br />
        <h4>The main two things to take from this are:</h4>
        <Segment color="teal">
          <List>
            <List.Item as="a">
              <Icon name="right triangle" size="small" />
              <List.Content>
                <List.Header>
                  Let go of your worries if you can't do anything about it.
                </List.Header>
              </List.Content>
            </List.Item>
            <List.Item as="a">
              <Icon name="right triangle" size="small" />
              <List.Content>
                <List.Header>
                  If you can do something about it, take action as soon as
                  possible.
                </List.Header>
              </List.Content>
            </List.Item>
          </List>
        </Segment>
        <h4>
          Using this framework, you can simplify your worrying experience. You
          can run your problems through this filter and it will tell you how to
          approach the situation.
        </h4>
        <h4>
          This should take a lot of the hard work out of worrying, because you
          will likely find that many of the things you were worrying about fall
          into the category of things you can't do anything about. In these
          cases, worrying won't solve anything, so there's nothing to gain from
          it.
        </h4>
        <h4>
          That just leaves those problems that you can do something about. If
          you know you can do something positive to help the situation, then the
          sooner you take action, the better.
        </h4>
        <h4>
          In the eventuality that there is something you'll be able to do in the
          future, but there is nothing to be done at the moment - then you
          should try to let go of the worries until then. When then comes, you
          can take action and save yourself the worry that could come with
          procrastinating.
        </h4>
      </Container>
      <br />
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <br />
      <Message fluid>
        Using this problem solving framework, you can at least reduce the amount
        of things you worry about, and at best, find the solution to all
        worrying! After all, if you've eliminated worrying about things you
        can't do anything about, and by taking action you can eliminate things
        you can do something about... there's not much left to worry about is
        there!
      </Message>
      <br />
      <Message color="teal">
        <h2>More about problem solving worries</h2>
        <p>
          "When you stop worrying about things you can’t control, you’ll have
          more time and energy to devote to the things you do have control over.
          And this can be key to reaching your greatest potential."
        </p>
        <a href="https://www.forbes.com/sites/amymorin/2020/05/11/2-psychological-tricks-that-will-help-you-stop-worrying-about-things-you-cant-control/">
          Amy Morin - forbes.com
        </a>
      </Message>
      <br />
    </Layout>
  );
};

export default problemSolving;
