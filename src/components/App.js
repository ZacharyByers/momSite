import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import Energy from './Energy';
import Simply from './Simply';
import About from './About';
import FAQ from './FAQ';
import Contact from './Contact';
import NoMatch from './NoMatch';
import { Segment, Image, Divider } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import headerImage from '../images/headerImage.jpeg';

class App extends React.Component {
  render() {
    return (
      <Segment basic>
        <Image src={headerImage} centered />
        <Segment basic> <NavBar /> </Segment>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/energy' component={Energy} />
          <Route exact path='/simply' component={Simply} />
          <Route exact path='/about' component={About} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
        <Divider />
        <Segment basic> <NavBar footer={true} /> </Segment>
        <Divider />
        <p>Copyright © Light-Hearted Healing with Jen. All rights reserved.</p>
      </Segment>
    );
  }
}

export default App;
