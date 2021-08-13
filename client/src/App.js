import Home from './views/Home'
import Shop from './views/Shop'
import MusicShop from './views/MusicShop'
import AppShop from './views/AppShop'
import { AudioPlayer } from './components/AudioPlayer'
import Music from './views/Music'
import Dev from './views/Dev'
import Biography from './views/Biography'
import Navigation from './components/Navigation'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
<Router>
      <Container fluid className="text-center">
        <Navigation/>
        <AudioPlayer />
        <Switch>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/musicshop'>
            <MusicShop />
          </Route>
          <Route path='/appshop'>
            <AppShop />
          </Route>
          <Route path='/music'>
            <Music />
          </Route>
          <Route path='/dev'>
            <Dev />
          </Route>
          <Route path='/biography'>
            <Biography />
          </Route>
          <Route path='/' component={Home}></Route>
          </Switch>
          </Container>
          </Router>
  );
}

export default App;
