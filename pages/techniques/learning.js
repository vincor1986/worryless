import React from "react";
import Layout from "../../components/Layout";
import { Link } from "../../routes";
import {
  Container,
  Breadcrumb,
  Image,
  Message,
  Header,
} from "semantic-ui-react";

const Learning = () => {
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
          <Breadcrumb.Section active>Learning</Breadcrumb.Section>
        </Breadcrumb>
        <br />
        <Header size="huge">Using Learning to Manage Worry</Header>
        <hr style={{ border: "2px solid #a7e9dc" }} />
        <br />
        <Image
          src="https://images.unsplash.com/photo-1509869175650-a1d97972541a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          fluid
        />
        <br />
        <p>Learning new things can be liberating!</p>
        <p>
          Whether it be a new hobby, skill, or even a new career - learning new
          things engages the mind and opens up possibilities.
        </p>
        <p>
          If we worry alot, our brains spend a lot of time going over things
          that may or may not be true. There are usually a lot of uncertainties
          and a sense of dread that anticipates the worse case scenario.
        </p>
        <p>
          To give that part of your brain a rest, try learning new skills that
          require your focus, attention and memory. By exercising these parts of
          your brain, you will give your worrying brain a rest and over time,
          that worrysome part of your mind may calm down and be less likely to
          jump at the opportunity to worry about things.
        </p>
        <p>
          You'll also find that the more you learn, the more adaptive your mind
          gets. This may mean that you see the world a slightly different way,
          or that you see things you didn't see before. Also, if you tire your
          mind out learning new things, you may be too tired to worry about
          things you once would have done. This way, you can spend your time
          productively and moving forward in life.
        </p>
        <Header size="huge">Consider learning a new skill</Header>
        <hr style={{ border: "2px solid #a7e9dc" }} />
        <br />
        <p>
          Is there something you've been putting off starting? A new creative
          project or a skill you would like to have for work? Maybe you have
          ambitions to be a published author or a graphics designer or a
          computer programmer? Now is the time to learn that new skill. Whatever
          it is, put your all into it, blinker your worry brain and focus on
          mastering your new passion.
        </p>
        <p>
          In the end, even if you aren't the next Stephen King or Bill Gates,
          you will have learned one of the most valuable skills in the world:{" "}
          <strong>
            how to distract your mind from worry while you get on with your
            life!
          </strong>
        </p>
        <br />
        <hr style={{ border: "2px solid #a7e9dc" }} />
        <br />
        <Message color="teal">
          <h2>More about using learning to fight worry</h2>
          <p>
            "…what else can employees do to temper the ill effects of stress?
            Our research suggests …focusing on learning. This can mean picking
            up a new skill, gathering new information, or seeking out
            intellectual challenges. We found evidence that engaging in learning
            activities can buffer workers from detrimental effects of stress
            including negative emotions, unethical behavior, and burnout. "
          </p>
          <a href="https://hbr.org/2018/09/to-cope-with-stress-try-learning-something-new">
            hbr.org
          </a>
        </Message>
        <br />
      </Container>
    </Layout>
  );
};

export default Learning;
