import React from "react";
import profileIcon from "./icons/profile.png";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  titleWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: "30px",
  },
  titleLogo: {
    dispaly: "flex",
    height: 50,
  },
  title: {
    marginLeft: 12,
    display: "flex",
    alignItems: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  navItems: {
    display: "flex",
    gap: "20px",
    paddingRight: "20px",
    listStyleType: "none",
    alignItems: "center",
  },
};

export default function Navbar() {
  return (
    <nav
      style={{
        ...styles.navbar,
      }}
    >
      <div style={styles.titleWrapper}>
        <img src={profileIcon} style={styles.titleLogo}></img>
        <h1 style={styles.title}>George</h1>
      </div>
      <ul style={styles.navItems}>
        <li>
          <a
            href="https://www.rarestamp.xyz/collection/george/0"
            style={{ fontSize: 18, textDecoration: "none", color: "black" }}
          >
            Rarestamp
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/stamp_george"
            style={{ fontSize: 18, textDecoration: "none", color: "black" }}
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/HADXuQt6"
            style={{ fontSize: 18, textDecoration: "none", color: "black" }}
          >
            Discord
          </a>
        </li>
      </ul>
    </nav>
  );
}
