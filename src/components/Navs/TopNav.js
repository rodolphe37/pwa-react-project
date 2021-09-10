import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/GitHub-profile-done.png";

const TopNav = () => {
  const { t } = useTranslation();
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand className="brand">
        <div href="/">
          <img
            className="octicon octicon-mark-github v-align-middle"
            src={Logo}
            alt="github-logo"
          />
        </div>
      </Navbar.Brand>
      &emsp;
      <Nav className="mr-auto hidden-phone">
        <Link to="/">{t("homeTitle")}</Link>&emsp;
        <Link to="/about">{t("about")}</Link>&emsp;
        <Link to="/dashboard">{t("charts")}</Link>&emsp;
        <Link to="/repository">{t("repos")}</Link>
      </Nav>
    </Navbar>
  );
};
export default TopNav;
