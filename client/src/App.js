import './App.css';
import Home from './views/Home'
import Blog from './views/Blog'
import RecordAVerse from './components/RecordAVerse'
import Login from './components/Login'
import MediaRecorder from './components/MediaRecorder'
import AddPost from './components/AddPost'
import ScrollToTop from './components/ScrollToTop';
import AppShop from './views/AppShop'
import { AudioPlayer } from './components/AudioPlayer'
import Footer from './components/Footer'
import Music from './views/Music'
import Dev from './views/Dev'
import Biography from './views/Biography'
import Navigation from './components/Navigation'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import dotenv from 'dotenv'
dotenv.config();


function App() {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');

  const fetchData = async () => {
    const res = await fetch('https://aubrey.digital/phpAPI/api/posts/')

    const data = await res.json();
    return data;
  }

  const getPosts = async () => {
    const apiPosts = await fetchData();
    setPosts(apiPosts.data);
  }

  useEffect(() => {
    const getPosts = async () => {
      const apiPosts = await fetchData();
      setPosts(apiPosts.data);
    }

    getPosts()
  }, []);
  return (
<Router>
      <Container fluid className="text-center">
        <Navigation isAdmin={isAdmin} setIsAdmin={setIsAdmin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <ScrollToTop />
        <AudioPlayer />
        <Switch>
          <Route path='/blog'>
            <Blog posts={posts} loggedUser={loggedUser} setLoggedUser={setLoggedUser} getPosts={getPosts} setPosts={setPosts} isAdmin={isAdmin} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          </Route>
          <Route path='/addPost'>
            <AddPost posts={posts} getPosts={getPosts} setPosts={setPosts} setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path='/appshop'>
            <AppShop />
          </Route>
          <Route path='/music'>
            <Music />
          </Route>
          <Route path='/record'>
            <MediaRecorder />
          </Route>
          <Route path='/collab'>
            <RecordAVerse />
          </Route>
          <Route path='/dev'>
            <Dev />
          </Route>
          <Route path='/login'>
            <Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} loggedUser={loggedUser} setLoggedUser={setLoggedUser}/>
          </Route>
          <Route path='/biography'>
            <Biography />
          </Route>
          <Route path='/' component={Home}></Route>
          </Switch>
          <Footer />
          </Container>
          </Router>
  );
}

export default App;
