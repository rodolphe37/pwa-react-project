import React from 'react';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="users">Users</Link></Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route path='/about' component={About}></Route>
          <Route path='/users' component={Users}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
