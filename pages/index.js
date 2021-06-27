import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import Layout from "../components/Layout";
import {
  Image,
  Header,
  Card,
  Container,
  Segment,
  Button,
} from "semantic-ui-react";
import { Link } from "../routes";
import sky from "../img/sky.png";
import cycle from "../img/worry-cycle.PNG";

class Index extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Image src={sky.src} fluid />
        </Container>
        <br />
        <br />
        <Container>
          <Header size="huge">Worry is common</Header>

          <hr style={{ border: "2px solid #a7e9dc" }} />
          <h4>We live in stressful times.</h4>
          <h4>
            Life can seem so overwhelming, what with pressures from work,
            family, friends, and the unpredictable problems life can throw at
            us.
          </h4>
          <Image
            src="https://images.unsplash.com/photo-1604183667964-bce80268b39d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            size="large"
            floated="left"
          />
          <h4>
            We all have something called a negativity bias. A tendency to focus
            on the negative sides of life. It is built into all humans. Our
            negative bias used to serve us well when our ancestors were trying
            to survive in the wild and needed to be vigilant for dangers around
            every corner.
          </h4>

          <h4>
            The problem is when this negative bias gets out of hand, and starts
            dictating the way we see our world and our reality.
          </h4>
          <h4>
            For some people, this negative bias gets really out of control and
            it can lead to excessive worrying that is unhealthy and negatively
            impacts the individual's life.
          </h4>
          <h4>
            This may mean overly worrying about how they are perceived at work,
            replaying awkward social situations again and again in their mind or
            ruminating for hours about small failures. It can get really out of
            hand. Many people worry about others getting at them or trying to
            harm them in some way. It really is common.
          </h4>
          <h4>
            Our aim is to offer a collection of proven strategies to help a
            person regain control of their worrying and live a more positive,
            productive and fulfilling life.
          </h4>
        </Container>
        <br />

        <Segment>
          <p style={{ textAlign: "right" }}>
            <em>
              This section is taken from "Winning Against Worry", a workbook
              from the Worry Intervention Trial. Please see the page footer for
              full details.
            </em>
          </p>
          <Header size="huge">What the experts say about worry</Header>
          <hr style={{ border: "2px solid #a7e9dc" }} />
          <br />
          <Card.Group>
            <Card fluid color="teal">
              <Card.Content>
                <Card.Header>We all worry from time to time</Card.Header>
                <Card.Description>
                  It has been estimated that four out of ten people worry every
                  day.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid color="teal">
              <Card.Content>
                <Card.Header>Worry takes up a lot of time</Card.Header>
                <Card.Description>
                  Most people worry for just a few minutes at a time and some
                  people worry for hours on end.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid color="teal">
              <Card.Content>
                <Card.Header>Worry peaks at certain times of day</Card.Header>
                <Card.Description>
                  Worriers say that worry ‘peaks’ first thing in the morning and
                  last thing at night – probably because these are the times
                  when we’re less busy and occupied with other things.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid color="teal">
              <Card.Content>
                <Card.Header>Worriers worry about almost anything</Card.Header>
                <Card.Description>
                  People sometimes say that they start by worrying about a small
                  problem which can quickly get out of proportion. Common
                  worries include work, health, money and relationships, but
                  worry can also focus on bigger concerns, such as threats to
                  personal safety, including fears of harm to ourselves or those
                  we love.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid color="teal">
              <Card.Content>
                <Card.Header>
                  Worriers usually report a love-hate attitude to their worrying
                </Card.Header>
                <Card.Description>
                  Worriers report that on the one hand it feels as though they
                  need to worry to stay safe and in control. But on the other
                  hand they realise that worry isn’t helpful. It doesn’t solve
                  their problems, it takes up time and makes them feel bad. So,
                  worriers have positive and negative beliefs about their worry.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid color="teal">
              <Card.Content>
                <Card.Header>
                  What unites worriers are deep down feelings of unsafety and
                  uncertainty in the world
                </Card.Header>
                <Card.Description>
                  Underneath all that worry, fretting, and fear, worriers report
                  feeling generally unsafe and uncertain in the world. Feeling
                  unsafe and uncertain every day is exhausting and can be very,
                  very, difficult to live with.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
          <br />
          <Header size="huge">The worry avalanche</Header>
          <Container>
            <hr style={{ border: "2px solid #a7e9dc" }} />

            <h4>People have described worry like an avalanche of snow.</h4>
            <Image
              src="https://images.unsplash.com/photo-1555104876-061df4ef2c45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"
              size="medium"
              floated="right"
            />
            <h4>
              The concerns start off as snow flakes falling from the sky. After
              a day of heavy snow, the snow flakes start to cluster and gather
              speed as they tumble down the mountain side, as they fall they
              gain momentum and gather additional snow, steadily growing into
              larger and larger snow balls that can be seen rushing down the
              mountain side.{" "}
            </h4>
            <h4>
              The more they tumble, the more snow they gather, and the larger
              the snow balls become... until... before you know it... there is
              an avalanche of snow rushing full speed ahead down the side of the
              mountain, signaling danger and fear for those it meets.
            </h4>
            <br />
          </Container>
          <br />
          <Container>
            <Header size="huge">We can worry about anything!</Header>
            <hr style={{ border: "2px solid #a7e9dc" }} />
            <Segment>
              <p>
                For instance, imagine dropping a pen on the ground. Let's worry
                about it! Let's ask ourselves 'What bad thing could happen?' and
                keep asking that question. Try it and see to what an extreme
                extent worrying can lead you!
              </p>
              <p>
                It is possible to worry about the smallest things. Equally, it
                is possible to worry about good things too!
              </p>
              <p>
                Now imagine winning the lottery. That's got to be great - hasn't
                it? Let's try worrying about it - what bad things could happen?
              </p>
              <p>
                These exercises can teach us a lot about worry. Most worriers
                find it possible to reach very extreme results just worrying
                about something as inconsequential as dropping a pen, or as
                life-changingly wonderful as winning the lottery.
              </p>
              <p>
                It seems that worry comes very naturally to some of us, but it
                is easy for our worry to get out of control. It usually feeds on
                our negativity bias and focuses our minds on negative and
                unhelpful concepts.
              </p>
            </Segment>
          </Container>
          <br />
          <br />
          <Container>
            <Header size="huge">So why do we worry?</Header>
            <hr style={{ border: "2px solid #a7e9dc" }} />
            <Segment>
              <p>
                If worrying always just takes us to the negative, the unhelpful
                and the distressing... why do we do it?
              </p>
              <p>
                It might just be habit. We've done it for years, perhaps our
                parents did it. It's familiar and feels necessary. Switching it
                off doesn't even enter our minds or it seems impossible.
              </p>
              <p>
                However, very importantly, many people start a period of worry
                for a reason. They may have a motivation. They believe worry can
                help in some way.
              </p>
              <p>
                But once worry starts, for some people the positives seem to
                disappear and worry starts to feel more of a problem.
              </p>
            </Segment>
          </Container>
          <br />
          <br />
          <Container>
            <Header size="huge">
              Can you relate to the below description of a worry cycle?
            </Header>
            <hr style={{ border: "2px solid #a7e9dc" }} />
            <Segment>
              <h3>
                "It's as though deep down I feel unsafe, so I worry because I
                think it will help me prepare for the worst, but worry just
                makes me dwell on worse and worse possible outcomes, so the
                worry itself becomes a problem and I just end up feeling out of
                control and upset by it all"
              </h3>
              <Image src={cycle.src} fluid />
            </Segment>
          </Container>
          <br />
          <br />
          <Container>
            <Header size="huge">What do others worry about?</Header>
            <hr style={{ border: "2px solid #a7e9dc" }} />
            <br />
            <p>
              Here are some examples of extreme worry, shared by people on{" "}
              <a href="http://www.paranoidthoughts.com">
                www.paranoidthoughts.com
              </a>
              <br />
              <br />
            </p>
            <Card color="teal" fluid>
              <Card.Content header="Anna" />
              <Card.Content
                description="I have always been a little anxious about what other
              people think of me, and if I have upset anyone.
              But recently this seems to have become worse on
              graduating as a nurse. Now that I have begun my
              new career I feel as though I am not capable of
              carrying out this highly stressful occupation, and
              worry that I am constantly getting things wrong,
              and that my colleagues are discussing this behind
              my back."
              />
              <Card.Content extra>UK</Card.Content>
            </Card>
            <Card color="teal" fluid>
              <Card.Content header="Justin" />
              <Card.Content
                description="I have a real problem with people phoning me.

              Sometimes I’ll be trying to relax after a hard day at
              work and my friends will ring me so I wont answer
              because I’m tired or busy, then they don’t stop
              ringing me and carry on and I start to get anxious
              and I feel like their going to come to my house and
              like break in or say something I don’t wanna hear,
              if I here cars outside I worry that it’s my friends
              have rang my ex and has drove them down. I get
              to the point where I can’t sleep and I’m up for hours
              worrying and telling myself that its not gonna
              happen and I’m just being stupid but it doesn’t
              work.
              I worry about my friends, I feel like their going to
              slag me off and make things up about me.
              I feel like people are looking at me and judging me.
              I have days were I can’t leave the house at all not
              even to see my friends, that’s usually when I get
              anxious about my friends constantly ringing me.
              I’ve been diagnosed by my doctor as having
              moderately severe depression and every time I feel
              as though I’m getting better or things are changing
              
              it just starts all over again it’s like it goes in cycles.
              Depression and mental illnesses run in my family so
              I guess I’ve got no chance!!
              I sometimes wonder if I really am depressed I don’t
              feel good enough to be classed as depressed! I
              know that sounds stupid but I feel as though I’m just
              a mess and there’s nothing more to it. I’m only 16
              which is rubbish as the doctors won’t prescribe me
              any antidepressants.
              I’m scared to post this in case people just look at it
              and think I’m pathetic or that I’m making it up, I feel
              such an idiot. I used to have a councillor but she
              didn’t really do much. Now I just want someone who
              I can talk to who will just listen and know what to do."
              />
              <Card.Content extra>UK</Card.Content>
            </Card>
            <Card color="teal" fluid>
              <Card.Content header="Laura" />
              <Card.Content
                description="I believe that all of my very close friends are out to
              get me. I worry all the time about them. If one of my
              friends doesn’t text me back or doesn’t answer my
              phone call I worry that they hate me or are ignoring
              me and that I have done something wrong even if I
              haven’t. I also worry that if something goes missing
              it was one of my friends. I know this isn’t true and
              I can talk about this with my friends but they are
              getting sick of me going on at them now."
              />
              <Card.Content extra>Scotland</Card.Content>
            </Card>
          </Container>
          <br />
        </Segment>
        <br />
        <br />
        <Container>
          <Header size="huge">So what can I do about it?</Header>
          <hr style={{ border: "2px solid #a7e9dc" }} />

          <h4>There is plenty a person can do if worry has become an issue.</h4>
          <Image
            src="https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            fluid
            floated="right"
          />
          <h4>
            The first thing to do is seek medical support. Talking to your
            doctor is the best option, but there are plenty of other support
            options available out there.
          </h4>
          <h4>
            Click{" "}
            <Link route="/links">
              <a>here</a>
            </Link>{" "}
            to view our links page to find support in your region.
          </h4>
          <h4>
            There are also a range of tried and tested techniques that can help
            a person get their worrying under control. Click{" "}
            <Link route="/techniques">
              <a>here</a>
            </Link>{" "}
            to see some of these techniques and to learn more about what you can
            do to get a handle on the problem.
          </h4>
          <br />
          <Link route="/links">
            <a>
              <Button inverted color="blue">
                Find support in your area
              </Button>
            </a>
          </Link>
          <Link route="/techniques">
            <a>
              <Button inverted color="green">
                Techniques to manage worry
              </Button>
            </a>
          </Link>
        </Container>
        <br />
        <br />
        <hr style={{ border: "2px solid #a7e9dc" }} />
        <br />
        <Segment>
          Much of the content of this page has been taken from "Winning Against
          Worry", a workbook from the Worry Intervention Trial (WIT) produced by
          Oxford University, Southampton University, Oxford Health NHS
          Foundation Trust and Southern Health NHS Foundation Trust. This
          content was written by: Dr. Helen Startup (Oxford University, and
          Oxford Health NHS Foundation Trust), Professor Daniel Freeman (Oxford
          University, and Oxford Health NHS Foundation Trust), Professor David
          Kingdon (Southampton University, and Southern Health NHS Foundation
          Trust), Dr Jacinta Prendergast (Southampton University, and Southern
          Health NHS Foundation Trust) and Dr Katherine Pugh (Oxford University,
          and Oxford Health NHS Foundation Trust).
        </Segment>
        <br />
      </Layout>
    );
  }
}

export default Index;
