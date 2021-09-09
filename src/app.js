
import { Home } from './routes/Home'
import { Contact } from './routes/Contact';
import { About } from './routes/About';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Navigation />
          <Switch>
            <React.Fragment>
              <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
              </div>
            </React.Fragment>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
