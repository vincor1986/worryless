import React from "react";
import Layout from "../../components/Layout";
import {
  Container,
  Breadcrumb,
  Header,
  Image,
  Segment,
  Card,
  List,
  Icon,
  Message,
} from "semantic-ui-react";
import { Link } from "../../routes";

const Positive = () => {
  return (
    <Layout>
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
        <Breadcrumb.Section active>Positive Future</Breadcrumb.Section>
      </Breadcrumb>
      <br />
      <Header size="huge">Positive vision for your future</Header>
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <br />
      <Container>
        <Segment>
          <h4>
            Learning to see what can go well, instead of what can go badly, is a
            skill. It can be really hard to anticipate good things happening to
            you, especially when you're so used to looking out for danger,
            trouble and sadness.
          </h4>
          <Image
            src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            size="large"
            floated="left"
          />
          <h4>
            It can seem counter-intuitive to consider how great life could be
            for you in the future - especially when all you can think about
            right now is how worrying the present is. However, it really helps
            to be optimistic and to carve out a positive vision of your future.
          </h4>
          <h4>
            The brain is a muscle, and the more you exercise a muscle, the
            stronger it gets. One of the problems with worrying is that it
            exercises the brain in a bad way - training the mind to think of
            only the bad things that could happen.
          </h4>
          <h4>
            By considering how brilliant life could be in the future, you are
            training your mind to be more optimistic. You can exercise the part
            of your brain that sees positive potentials and that can literally
            change the way you see the world.
          </h4>
          <h4>
            It is recommended that you really go wild with your projections for
            your future. It is not a case of expecting that your future will be
            exactly like the optimistic vision you create. It is likely that
            there will be some negatives in your future, that's only being
            realistic. But the aim of this activity is to exercise a part of
            your brain that has not been exercised much during your worry
            episodes. Plus, you may realise that life could be really great for
            you in the future and that could help you take steps today to make
            that dream a reality.
          </h4>
          <h4>
            So really go wild with this activity and dare to dream! The more
            positive the better!
          </h4>
        </Segment>
        <br />
        <Header size="huge">So how do I do it?</Header>
        <hr style={{ border: "2px solid #a7e9dc" }} />
        <br />
        <Card.Group>
          <Card fluid color="teal">
            <Card.Content>
              <br />
              <Card.Header>Write it down</Card.Header>
              <Card.Description>
                Sit down and consider how great life could be for you in five
                years time. Think of as many details as you can.
                <br />
                <br />
                It doesn't matter where you write it, on your phone or computer,
                or in a notebook... the choice is yours. Just make sure to write
                it somewhere you'll be able to access it easily.
                <br />
                <br />
                Try to answer all of the below questions as optimistically as
                you can:
                <br />
                <List>
                  <List.Item as="a">
                    <Icon name="home" size="large" />
                    <List.Content>
                      <List.Header>Where will you be living?</List.Header>

                      <List.Description>
                        Really think this through. Where would you love to live?
                        What would you like your place to look like? How will
                        you spend your time there? Will you have a garden, and
                        if so, what will it look like? What will the view out of
                        your window look like? Who will you live with? Add as
                        many positive visions as you can and experiment with
                        different ideas until you settle on one that seems ideal
                        to you.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <br />
                  <List.Item as="a">
                    <Icon name="group" size="large" />
                    <List.Content>
                      <List.Header>
                        What will your social connections be like?
                      </List.Header>
                      <List.Description>
                        Remember that this exercise is about imagining the
                        positive future that you want, so don't answer with what
                        you think others would want or what you <em>should</em>{" "}
                        want. Be honest and imagine what you would like your
                        ideal social future to look like. Consider who your
                        friends will be? How often will you see them? What will
                        your relationship(s) be like? What will you do with them
                        when you spend time together? What will they be like?
                        Will you have the same friends as you do now or will you
                        have new friends in your life? And how will they see
                        you? Be as optimistic and as positive as you can be.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <br />
                  <List.Item as="a">
                    <Icon name="briefcase" size="large" />
                    <List.Content>
                      <List.Header>
                        What will you be doing for a living?
                      </List.Header>
                      <List.Description>
                        Consider what your dream job is. How will it feel to be
                        doing this job? What will your average day be like? How
                        much will you earn? Will you be known in your field?
                        What will your ambitions be like in the future? What
                        skills will you have? What will you have achieved
                        professionally?
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <br />
                  <List.Item as="a">
                    <Icon name="plane" size="large" />
                    <List.Content>
                      <List.Header>Where will you travel?</List.Header>
                      <List.Description>
                        Where will you travel on holiday? Where have you always
                        wanted to go? How often will you go away on a break?
                        Will you have a holiday home and if so, how often will
                        you visit?
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <br />
                  <List.Item as="a">
                    <Icon name="basketball ball" size="large" />
                    <List.Content>
                      <List.Header>
                        How will you spend your free time?
                      </List.Header>
                      <List.Description>
                        What will you do in your spare time? Will you have any
                        new hobbies? What will you do to take a break? Where
                        will you go? How will you structure your free-time? Will
                        you have a fixed schedule or will you play it by ear?
                        Think of as many details as you can.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <br />
                  <List.Item as="a">
                    <Icon name="user outline" size="large" />
                    <List.Content>
                      <List.Header>What will you be like?</List.Header>
                      <List.Description>
                        This is a big one. Think of who you would love to be in
                        the future. What sort of attitudes will you have? How
                        will others see you? How will you deal with problems?
                        What will be your strengths? What sort of things will
                        you find interesting? What goals will you have? How will
                        you reward yourself? Be really optimistic about the
                        person you could become. Be bold and be honest about who
                        you would love to be.
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
                <br />
              </Card.Description>
            </Card.Content>
          </Card>
          <br />
          <Card fluid color="teal">
            <Card.Content>
              <br />
              <Card.Header>Read it back regularly and take it in</Card.Header>
              <Card.Description>
                Now you have it written down, take the time regularly to read
                back through it and absorb it into your perception of the world.
                <br />
                <br />
                It will be easy to forget it unless you concrete it in your mind
                by regularly reading it back.
                <br />
                <br />
                It's important that you remember that this is an ideal future.
                It may not all come true, but the idea is that you really think
                about how wonderful it would be to have this future and the hope
                is that this will help your subconscious mind find a path to it
                from your present.
                <br />
                <br />
                It will also exercise that part of your brain that doesn't get a
                look in when you are worrying. The positive, optimisitic, happy
                part of your brain.
                <br />
                <br />
                You can re-write or edit the contents of your optimistic vision
                as you grow, as you may have a different vision in a year from
                now.
              </Card.Description>
            </Card.Content>
            <br />
          </Card>
          <br />
          <Card fluid color="teal">
            <Card.Content>
              <br />
              <Card.Header>
                (Optional) Record yourself reading it back
              </Card.Header>
              <Card.Description>
                This is for the advanced wannabe optimists.
                <br />
                <br />
                By reading it back, and recording yourself, you are making a
                small commitment to take action and pursue this future. It will
                give you more time to really consider how great it would be to
                live the life detailed in your vision.
                <br />
                <br />
                Once you have recorded it, you can listen to it back. Hearing
                yourself talk about your vision can be a powerful experience.
                The process of going through this exercise can empower your mind
                to be more optimistic about other areas of your life right now.
                <br />
                <br />
                You can't worry and be optimistic at the same time, after all.
                <br />
                <br />
                And if you <strong>really</strong> want to drive home your
                vision, you could listen to the recording now and again while
                you sleep - to assist your unconscious mind in shifting its
                focus onto positive and optimistic things.
              </Card.Description>
            </Card.Content>
            <br />
          </Card>
          <br />
          <Card fluid color="teal">
            <Card.Content>
              <br />
              <Card.Header>Set yourself SMART goals</Card.Header>
              <Card.Description>
                <br />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/2/28/SMART-goals.png"
                  fluid
                />
                <br />
                <br />
                Take <strong>three</strong> of your favourite ideas from your
                vision and set SMART goals that will take you towards those
                aspects of your vision.
                <br />
                <br />
                Make sure that you are really specific about how those steps
                will take you towards those positive visions.
                <br />
                <br />
                Try to make them as measurable as possible. Also try to make
                sure that they are achieveable.
                <br />
                <br />
                Finally, set a time-target. It doesn't matter if you don't quite
                make your target. Chances are that you will be doing better if
                you are aiming for these targets than if you aren't. It's okay
                if you don't succeed, because as Mohammed Ali once said "If you
                aim for the stars, you just might make it to the moon".
              </Card.Description>
            </Card.Content>
            <br />
          </Card>
        </Card.Group>
        <br />
        <Message color="teal" fluid>
          <h3>
            <strong>Keep practising being optimistic!</strong>
          </h3>
          <br />
          When we are worrying, we are weakening our ability to be optimistic,
          but when we are optimistic, we are tearing down the barriers in our
          brains that prevent us from giving ourselves permission to be
          positive. So keep reading or listening to your vision and keep
          strengthening the skill of being optimistic about your future.
        </Message>
      </Container>
      <br />
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <br />
    </Layout>
  );
};

export default Positive;
