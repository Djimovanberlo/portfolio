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
      <div></div>
      <a href="/CV_Djimo_van_Berlo.pdf" download="CV_Djimo_van_Berlo.pdf">
        <button className="button">Download resume</button>
      </a>
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
      <div className="lineWithText">Additional info</div>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "1fr 2fr",
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
        <div style={{ gridArea: "2 / 1 / 3 / 2", textAlign: "justify" }}>
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
        <div style={{ gridArea: "1 / 2 / 3 / 3", textAlign: "justify" }}>
          Personal achievements
          <ul>
            <li className="coloredBullet">
              Exchange student to Tromsø One year in a Norwegian school and
              Norwegian family on my 16th.
            </li>
            <li className="coloredBullet">
              Oxfam Novib Trailwalker Sponsored 100km hike within one day for
              educational projects in Myanmar.
            </li>
            <li className="coloredBullet">
              113Online.nl Suicide prevention - Primary care chatting and
              telephoning to prevent suicide.
            </li>
            <li className="coloredBullet">
              Working as a mailman in my hometown of Utrecht, NL for over 10
              years.
            </li>
            <li className="coloredBullet">
              Being generally a pretty nice guy to be honest
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
