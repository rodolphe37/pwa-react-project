import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import Home from './components/Home'
import About from './components/About'
import Repositories from './components/Repositories'
import Linechart from './components/Linechart'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand className="brand" href="/">GitHub Activity</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/">Home</Link>&emsp;
            <Link to="/about">About</Link>&emsp;
            <Link to="/linechart">Graph</Link>&emsp;
            <Link to="repository">My Repos</Link>
          </Nav>
          <div className="hidden">
            {/*<Form inline >
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>*/}
          </div>
        </Navbar>
        <Switch>
          <Route path='/about' component={About}></Route>
          <Route path='/linechart' component={Linechart}></Route>
          <Route path='/repository' component={Repositories}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
