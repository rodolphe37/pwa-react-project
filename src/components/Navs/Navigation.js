import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faHome, faChartBar, faFolder } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';


const Navigation = (props) => {
  const { t } = useTranslation();

  const tabs = [{
    route: "/",
    icon: faHome,
    label: `${t('homeTitle')}`
  }, {
    route: "/about",
    icon: faAddressCard,
    label: `${t('about')}`
  }, {
    route: "/dashboard",
    icon: faChartBar,
    label: `${t('charts')}`
  },
  {
    route: "/repository",
    icon: faFolder,
    label: `${t('repos')}`
  }]
  return (
    <div>
      {/* Bottom Tab Navigator*/}
      <nav className="navbar fixed-bottom navbar-light" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) => (
                <NavItem key={`tab-${index}`}>
                  <NavLink to={tab.route} className="nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon size="lg" icon={tab.icon} />
                      <div>{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
    </div>
  )
};
export default Navigation;
