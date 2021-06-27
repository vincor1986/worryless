import React from "react";
import Layout from "../../components/Layout";
import { Breadcrumb, Header, Image, Card, Message } from "semantic-ui-react";
import { Link } from "../../routes";
import prayer from "../../img/prayer.png";
import worship from "../../img/worship.png";
import book from "../../img/book.png";

const Faith = () => {
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
        <Breadcrumb.Section active>
          Managing worry with Faith
        </Breadcrumb.Section>
      </Breadcrumb>
      <br />
      <Header size="huge">Managing Worry with Faith</Header>
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <br />
      <p>
        God sees everything, and He understands what you are going through. He
        knows how exhausting it can be to worry about every little thing.
      </p>
      <p>
        Every religious text has guidance for how to live life, what to worry
        about, and what not to worry about. Your faith can simplify life so that
        you can just focus on getting closer to God and following the guidance
        that God has laid before you.
      </p>
      <Image
        src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        size="medium"
        floated="right"
      />
      <p>
        Having a personal relationship with God can empower you with the
        strength, patience and humility that a person needs to move through
        trying times. By remembering that God wants the best for you, that God
        is looking over you, you can take comfort and peace in the knowledge
        that God has things under control.
      </p>
      <p>
        It's so easy to forget this in modern times. There are so many things to
        get stressed out about. So many things we consider worthy of our worry.
        Our worries can even get in the way of our faith if we let them. We can
        get swept up in worrying about all the little things that when a big
        worry comes along it knocks us down - and we can end up feeling that God
        is not helping us, or that with all these worries going on - we don't
        have time for God.
      </p>
      <p>
        But this section is written to show you that the opposite is true.
        Getting closer to God is one of the best ways you can handle your worry.
      </p>
      <br />
      <Header size="huge">So how can faith help with worry?</Header>
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <br />
      <h3>
        Here are some of the ways that practising faith can help with worry:
      </h3>
      <br />
      <Card.Group>
        <Card fluid color="teal">
          <Card.Content style={{ backgroundColor: "#bcf5ef" }}>
            <Card.Header align="center">Prayer</Card.Header>
          </Card.Content>
          <Card.Content>
            <Image
              src={prayer.src}
              size="large"
              floated="left"
              style={{ borderRadius: "50%" }}
            />
            <h3>
              When we pray to God about our worries, we give them over to Him to
              deal with them. This can be a great relief, as many of the things
              we worry about may be out of our control - but they are well
              within the control that God has in our lives. God can do anything,
              and can handle all of our worries. God actually wants us to hand
              over our worries to Him, as it demonstrates faith and humility.
            </h3>
            <h3>
              Praying gives us hope, and can lead to practical resolutions of
              worries that we may have. Think of it as going to the highest
              authority with your concern, there is no better action you can
              take. And sometimes God will respond with an answer: a solution,
              peace of mind, a new option that didn't exist before.
            </h3>
            <h3>
              There is no problem that God can't solve. Prayer is a powerful
              tool, and one of the best ways to fight back against worry.
            </h3>
          </Card.Content>
        </Card>
        <br />
        <Card fluid color="teal">
          <Card.Content style={{ backgroundColor: "#bcf5ef" }}>
            <Card.Header align="center">Worship</Card.Header>
          </Card.Content>
          <Card.Content>
            <Image
              src={worship.src}
              size="large"
              floated="left"
              style={{ borderRadius: "50%" }}
            />
            <h3>
              Worshipping God is our way of revering, elevating and honouring
              Him. When we do this, we accept that He is so much greater than
              us, and that He is powerful and worthy of praise. These things
              help to remind us that God is in control, and also reaffirm to us
              that us and our problems are usually insignificant in the bigger
              scheme of things.
            </h3>
            <h3>
              Worship is also great, because while we give praise and reverance
              to God, we also take our attention away from ourselves. Most of
              our worries place us at the center of our attention, and this can
              be a difficult habit to break. Through worship, we encourage our
              brains to look outwards, to look to God and to place Him in the
              center of our attention, in a deeply concentrated and personal
              way.
            </h3>
            <h3>
              Whether you sing praises or recite worship to God, the act of
              worship is unlikely to make you worry more, but it could just help
              in some way.
            </h3>
          </Card.Content>
        </Card>
        <br />
        <Card fluid color="teal">
          <Card.Content style={{ backgroundColor: "#bcf5ef" }}>
            <Card.Header align="center">Reading</Card.Header>
          </Card.Content>
          <Card.Content>
            <Image
              src={book.src}
              size="large"
              floated="left"
              style={{ borderRadius: "50%" }}
            />
            <h3>
              Reading your holy book is a great way to prevent worrying. Within
              it, you can find guidance for how to interpret the world, how to
              respond to specific problems and how you should think and feel
              about certain subjects. It can provide you with the wisdom and
              structure to make decisions and provide new perspectives on
              worries that you have.
            </h3>
            <h3>
              There are a wealth of websites that tailor faith-based advice for
              specific common worries and issues that believers may come across
              in life. Some texts also have similar sections near the front or
              back to help readers find what they are looking for. These texts
              have often stood the test of time and served followers well for
              hundreds of years.
            </h3>
            <h3>
              If you have any questions about something you find in the text, a
              google search may provide added insight into the scripture, and
              there are plenty of chat rooms and internet groups that are
              willing to discuss these sorts of things online.
            </h3>
          </Card.Content>
        </Card>
      </Card.Group>
      <br />
      <Header size="huge">Your faith can guide you</Header>
      <hr style={{ border: "2px solid #a7e9dc" }} />
      <br />
      <p>
        Many believers rely on their faith to guide them and that takes so much
        pressure away from having to worry about this or that.
      </p>
      <p>
        By turning to God when you are worried, you can get the sense that you
        are doing something about it and seeking answers, inspiration or
        solutions. Sometimes, all we need is the comfort that comes from knowing
        that God is there, listening and understanding us.
      </p>
      <br />
      <Message color="teal">
        <h2>More about managing worries with faith</h2>
        <p>
          "I want to be settled and centered on Christ rather than eaten up and
          worn down by worry, annoyance, and discontent."{" "}
          <a href="https://faithspillingover.com/2014/08/25/more-jesus-less-fretting-and-fuming/">
            - betsydecruz - faithspillingover.com
          </a>
        </p>

        <p>"No one can pray and worry at the same time." - Max Lucado</p>
        <p>
          "Knowing that God is faithful, it really helps me to not be captivated
          by worry. But knowing that He will do what He has said, He will cause
          it to happen, whatever He has promised, and then it causes me to be
          less involved in worrying about a situation." - Josh McDowell
        </p>
      </Message>
      <br />
    </Layout>
  );
};

export default Faith;
