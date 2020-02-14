import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import About from './components/About/About'
import Company from './components/Company/Company'
import Job from './components/Job/Job';
import Edit from './components/Edit/Edit'

class App extends React.Component {

  state = {
    authenticated : false
  }

  componentDidMount() {
    let value = localStorage.getItem('checked') === "true" ? true : false  ;
    this.setState({authenticated: value})
  }

  render() {

    let { authenticated } = this.state;

    debugger

    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <main className="main-content">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/signin" component={SignIn} />
              <Route path="/about/company" component={Company} />
              <Route path="/about/job" component={Job} />
              {!authenticated && <Redirect from="/about/edit" to="/signin" exact />}
              {
                authenticated && <Route path="/about/edit" component={Edit} />
              }
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
