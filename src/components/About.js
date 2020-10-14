import React from "react";
import "../styles/about.css";

import { techSkills } from "../constants/techSkills";

const About = () => {
  return (
    <div className="content">
      <div>
        Hello friendly friend and welcome to my portfolio website. Here you'll
        find my resume, some projects I have been working on and general info.
        Hang around and{" "}
        <a href="/contact" style={{ textDecoration: "none", color: "#03989e" }}>
          Get in touch!
        </a>
        <br />
        <br />
        In july 2020 I graduated from the Codaisseur academy, an intensive full
        stack JavaScript bootcamp. I haven't stopped coding since. I love
        creating new things and solving problems in an analytical and creative
        way. In my free time I like to play with some code, cook up some games
        and develop some dinner. I like walk around and explore my surroundings,
        and perhaps the occasional draping-over-the-couch.
      </div>
      <br />
      <div className="lineWithText">Tech skills (for now)</div>
      <br />
      <div style={{ textAlign: "center" }}>
        {techSkills.map((tech, index) => {
          return (
            <img
              className="tooltip"
              src={require(`../img/icons/${tech}.png`)}
              style={{
                resizeMode: "cover",
                width: 35,
                height: 35,
                margin: 10,
              }}
              key={index}
              title={tech}
            />
          );
        })}
      </div>
      <br />
      <div className="lineWithText">TEMP SOMETHING...</div>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "1fr",
          gridColumnGap: 70,
        }}
      >
        <div style={{ gridArea: "1 / 1 / 2 / 2", textAlign: "justify" }}>
          Other skills
          <br />
          <br />
          Psychology, game development, training, coaching, scientific research,
          socratic dialogue, event organization, film making
        </div>
        <div style={{ gridArea: "1 / 2 / 2 / 3", textAlign: "justify" }}>
          Languages
          <br />
          <br />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(4, 1fr)",
              gridColumnGap: 0,
            }}
          >
            <div>Dutch</div>
            <div>
              <div className="dot" /> <div className="dot" />{" "}
              <div className="dot" />
            </div>
            <div>English</div>{" "}
            <div>
              <div className="dot" /> <div className="dot" />{" "}
              <div className="dot" />
            </div>
            <div>Norwegian</div>
            <div>
              <div className="dot" /> <div className="dot" />
            </div>
            <div>French</div>
            <div>
              <div className="dot" />
            </div>
          </div>
        </div>
        <div style={{ gridArea: "1 / 3 / 2 / 4", textAlign: "justify" }}>
          Personal achievements
          <br />
          <br />
          Exchange student to Tromsø One year in a Norwegian school and
          Norwegian family on my 16th.
          <br />
          <br />
          Oxfam Novib Trailwalker Sponsored 100km hike within one day for
          educational projects in Myanmar.
          <br />
          <br />
          113Online.nl Suicide prevention Primary care chatting and telephoning
          to prevent suicide.
          <br />
          <br />
          Working as a mailman in my hometown of Utrecht, NL for over 10 years.
          <br />
          <br />
          Being generally a pretty nice guy to be honest
        </div>
      </div>
      <button className="button">Download resume</button>
      {/* TO DO: button actually downloads resume */}
      {/* TO DO: add languages, skills, achievements content */}
    </div>
  );
};

export default About;

// .div1 { grid-area: 1 / 1 / 2 / 2; }
// .div2 { grid-area: 1 / 2 / 2 / 3; }
// .div3 { grid-area: 2 / 1 / 3 / 2; }
// .div4 { grid-area: 2 / 2 / 3 / 3; }
// .div5 { grid-area: 3 / 1 / 4 / 2; }
// .div6 { grid-area: 3 / 2 / 4 / 3; }
// .div7 { grid-area: 4 / 1 / 5 / 2; }
// .div8 { grid-area: 4 / 2 / 5 / 3; }
