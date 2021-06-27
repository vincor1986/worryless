import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Menu, Icon, Dropdown, Image } from "semantic-ui-react";
import logo from "../img/logo.png";
import { Link } from "../routes";

const Nav = () => {
  return (
    <Menu
      style={{
        marginTop: "10px",
        border: "1px solid #22A0CF",
      }}
      stackable
    >
      <Link route="/">
        <a className="item">
          <Image src={logo.src} alt="logo" />
        </a>
      </Link>
      <Menu.Menu
        stackable="true"
        compact="true"
        icon="labeled"
        position="right"
      >
        <Menu.Item name="Get help">
          <Link route="/links">
            <a
              className="item"
              style={{ background: "#bcf5ef", border: "1px solid #22A0CF" }}
            >
              <Icon name="phone" />
              Get help
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item name="techniques">
          <Link route="/techniques/">
            <a
              className="item"
              style={{ background: "#bbf2ea", border: "1px solid #22A0CF" }}
            >
              <Icon name="info" />
              Skills
            </a>
          </Link>
        </Menu.Item>

        {/* <Menu.Item name="positive vision">
          <Link route="/techniques/positive-vision">
            <a
              className="item"
              style={{ background: "#baf0e7", border: "1px solid #22A0CF" }}
            >
              <Icon name="search plus" />
              Positivity
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item name="positive vision">
          <Link route="/techniques/learning">
            <a
              className="item"
              style={{ background: "#b9eee4", border: "1px solid #22A0CF" }}
            >
              <Icon name="book" />
              Learning
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item name="externalising">
          <Link route="/techniques/externalising">
            <a
              className="item"
              style={{ background: "#b8ece0", border: "1px solid #22A0CF" }}
            >
              <Icon name="list ol" />
              Externalising
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item name="worry time">
          <Link route="/techniques/worry-time">
            <a
              className="item"
              style={{ background: "#b7e9dc", border: "1px solid #22A0CF" }}
            >
              <Icon name="cogs" />
              Worry Time
            </a>
          </Link>
        </Menu.Item> */}
      </Menu.Menu>
    </Menu>
  );
};

export default Nav;
