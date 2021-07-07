
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './components/views/Home';
import Work from './components/views/Work';
import Contact from './components/views/Contact';
import About from './components/views/About';
import Blog from './components/views/Blog';
import Post from './components/views/Post';
import MakePost from './components/views/MakePost'
import DWD from "./components/views/DWD";
import Login from './components/views/Login'
import React, { useState, useEffect } from 'react';
import Dashboard from './components/views/Dashboard'
import ImageManager from './components/ImageManager'
import NotFound from "./components/views/NotFound";
import 'cors'
import './styles/app.scss'
import './styles/media.scss'
import { ViewportProvider } from "./utils/ViewportProvider";

function App() {

  return (
    <Router  baseline='/'>
      <ViewportProvider>
        <Switch>
        <Route path='/work' render={props => <Work />} />
        <Route path="/blog/:postId" render={props => <Post />} />
        <Route path='/blog' exact render={props => <Blog />} />
        <Route path='/about' render={props => <About />} />
        <Route path='/updatePost/:postId' render={props => <MakePost />} />
        <Route path='/makePost' render={props => <MakePost />} />
        <Route path='/contact' render={Contact} />
        <Route path='/Login' render={props => <Login />} /> 
        <Route path="/dwd" render={props => <DWD />}  />
        <Route path='/dashboard' render={Dashboard} />
        <Route path='/' exact render={props => <Home />} />
        <Route render={props => <NotFound/>}/>
        </Switch>
      </ViewportProvider>
    </Router>
  );
}


export default App;
