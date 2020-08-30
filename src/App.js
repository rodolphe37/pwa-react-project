import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import Home from './components/Home'
import About from './components/About'
import Repositories from './components/Repositories'
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import JavascriptChart from './components/dashBoard/JavascriptChart'
import SwiftChart from './components/dashBoard/SwiftChart';
import VueChart from './components/dashBoard/VueChart';
import TypescriptChart from './components/dashBoard/TypescriptChart';
import PythonChart from './components/dashBoard/PythonChart';
import RubyChart from './components/dashBoard/RubyChart';
import PhpChart from './components/dashBoard/PhpChart';
import KotlinChart from './components/dashBoard/KotlinChart';
import JavaChart from './components/dashBoard/JavaChart';
import HtmlChart from './components/dashBoard/HtmlChart';
import HisLanguageChart from './components/dashBoard/HisLanguageChart';
import DartChart from './components/dashBoard/DartChart';
import CssChart from './components/dashBoard/CssChart';
import CplusPlusChart from './components/dashBoard/CplusPlusChart';
import { useTranslation } from 'react-i18next';
// import TopNav from './components/Navs/TopNav';
import Navigation from './components/Navs/Navigation';
import TopNav from './components/Navs/TopNav';

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="App">
      <Router>
        <div>
          <div className="top-nav"><TopNav /></div>
          <div className="bottom-nav-visible"><Navigation /></div>
          <UncontrolledDropdown nav inNavbar className="uncontrol-nav">
            <DropdownToggle className="nav-link port-navbar-link" nav caret>
              {t('translation')}
            </DropdownToggle>
            <DropdownMenu className="buttonTranslate">
              <span className="buttonLanguage" style={{ zIndex: '60', cursor: 'pointer' }}>
                <span className="tradButtonfr" style={{ marginRight: '15px' }} onClick={() => changeLanguage('fr')}><span role="img" aria-label="france flag">🇨🇵</span></span>
                <span className="tradButtonen " onClick={() => changeLanguage('en')}><span role="img" aria-label="england flag">🇬🇧</span></span>
                <span className="tradButtonpt " style={{ marginLeft: '15px' }} onClick={() => changeLanguage('pt')}><span role="img" aria-label="Português flag">🇵🇹</span></span>
              </span>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
        <Switch>
          <Route path='/about' component={About}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Route path='/repository' component={Repositories}></Route>
          <Route path='/' component={Home}></Route>
          <Route path='/javascript' component={JavascriptChart}></Route>
          <Route path='/vue' component={VueChart}></Route>
          <Route path='/typescript' component={TypescriptChart}></Route>
          <Route path='/swift' component={SwiftChart}></Route>
          <Route path='/python' component={PythonChart}></Route>
          <Route path='/ruby' component={RubyChart}></Route>
          <Route path='/php' component={PhpChart}></Route>
          <Route path='/kotlin' component={KotlinChart}></Route>
          <Route path='/java' component={JavaChart}></Route>
          <Route path='/html' component={HtmlChart}></Route>
          <Route path='/hisLanguages' component={HisLanguageChart}></Route>
          <Route path='/dart' component={DartChart}></Route>
          <Route path='/css' component={CssChart}></Route>
          <Route path='/c++' component={CplusPlusChart}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
