import React from "react";
import Layout from "../../components/Layout";
import { Breadcrumb, Header, Segment, Image, Message } from "semantic-ui-react";
import { Link } from "../../routes";

const WorryTime = () => {
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
        <Breadcrumb.Section active>Worry Time</Breadcrumb.Section>
      </Breadcrumb>
      <br />
      <Header size="huge">Worry Time</Header>
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <Segment>
        <h3>What is it?</h3>
        <h4>
          <strong>
            Managing worry can be compared to 'changing the channel' when a
            scary movie comes on the TV.
          </strong>
        </h4>
        <p>
          The easiest thing to do is to just sit back and let the movie play
          out. It's familiar, a little bit addictive, and maybe even somewhow
          compelling... but after a short time, you get drawn into the suspense,
          absorbed into the unfolding drama.
        </p>

        <Image
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          floated="right"
          fluid
        />

        <p>
          It may seem obvious, but when a 'worry movie' plays out in your mind,
          the best thing to do is to "change the channel", but this isn't as
          easy as it sounds for many people.
        </p>
        <p>
          Some very clever people have come up with a technique to teach you how
          to do this. The aim is to save up your worrying for a 15 minute period
          every day. We call this your '<strong>Worry Time</strong>'.
        </p>
        <p>
          How can you do this? There are two parts. You have to learn to notice
          when you start worrying and <strong>postpone</strong> this train of
          thought until your worry time.
        </p>
        <p>Then you need a set time in a set place for the worry time.</p>
      </Segment>

      <Header size="medium">Step One: Postponing worry</Header>
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <Segment>
        <Image
          src="https://images.unsplash.com/photo-1544393569-eb1568319eef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          size="small"
          floated="right"
        />
        <p>
          <strong>
            What will you do when you notice yourself starting to worry?
          </strong>{" "}
        </p>
        <p>
          Some people write down their worries to come back to later; some find
          an engaging activity that distracts their mind from it. Also, some
          people benefit from clapping and saying <strong>‘not now’</strong>{" "}
          when they notice a worry. Other people learn to simply let the worry
          go.{" "}
        </p>
        <p>
          It can be a little bit trial and error to begin with, and it may take
          some practise, but learning to postpone your worry is an incredibly
          powerful skill.
        </p>
      </Segment>
      <Header size="medium">Step Two: Managing your worries</Header>
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <Segment>
        <Image
          src="https://images.unsplash.com/photo-1620662736427-b8a198f52a4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
          size="small"
          floated="left"
        />
        <p>
          During worry time, you have the freedom to worry as much as you like,
          you can really go wild with your worry. You can worry about anything
          you want to.
        </p>
        <p>
          You need to set a time to worry for a 15 minute period, typically
          people often choose 6pm, because you will have any day time worries
          collected and you can get peace of mind well before bedtime. What time
          will you choose? It is important to make worrying as unappealing as
          possible, and it is recommended that you don't do worry time in your
          bedroom or anywhere where you'd otherwise like to relax. The aim is to
          only worry whilst sitting in an upright chair at a table and not in
          bed, or in a comfy chair.
        </p>
        <p>Where will you have your worry time?</p>
      </Segment>
      <br />
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <h4>
        Over time, with practise, you can improve the skill of delaying and
        postponing your worry and you can train your mind to worry less
        throughout the day. This can enable you to spend all that extra time and
        energy focusing on more beneficial thoughts and activities, and leading
        a more worry free life!
        <br />
        <br />
      </h4>
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <br />
      <Message color="teal">
        <h2>More information about worry time</h2>
        <p>
          "By making a commitment to rumination sessions, you may begin to
          notice that you are in control of your worrying. Scheduling your
          worrying time helps you to break the chain of frequent worrying you
          experience throughout the day."
        </p>
        <a href="https://www.verywellmind.com/how-can-i-stop-worrying-so-much-2583982">
          verywellmind.com
        </a>
        <p>
          "Studies, including one at Penn State University, found that those who
          scheduled time to worry showed a significant decrease in anxiety in 2
          to 4 weeks — plus they slept better."
        </p>
        <a href="https://www.headspace.com/articles/how-to-stop-worrying">
          headspace.com
        </a>
        <p>
          "A 2011 study led by cognitive scientists Dr. Gerardo Ramirez and Dr.
          Sian Beilock highlights this benefit: Students who struggled with
          academic anxiety took 10 minutes to journal about their fears before a
          big exam, which significantly improved their performance."
        </p>
        <a
          href="https://www.nytimes.com/2020/11/02/smarter-living/how-to-worry-mindfully.html"
          style={{ textAlign: "right" }}
        >
          nytimes.com
        </a>
      </Message>
      <br />
    </Layout>
  );
};

export default WorryTime;
