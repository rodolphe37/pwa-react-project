import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const TopNav = () => {
  const { t } = useTranslation();
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand className="brand" href="/">
        <img className="octicon octicon-mark-github v-align-middle" src={require('../../assets/images/GitHub-profil.png')} alt="github-logo" /></Navbar.Brand>&emsp;
      <Nav className="mr-auto hidden-phone">
        <Link to="/">{t('homeTitle')}</Link>&emsp;
    <Link to="/about">{t('about')}</Link>&emsp;
    <Link to="/dashboard">{t('charts')}</Link>&emsp;
    <Link to="/repository">{t('repos')}</Link>
      </Nav>
    </Navbar>
  )
}
export default TopNav
