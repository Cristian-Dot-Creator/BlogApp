import React, { Component } from 'react'
import Navbar from './componets/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './componets/Home'
import About from './componets/About'
import Contact from './Contact'
import Post from "./componets/Post"



export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Navbar/>
          <Switch>
          <Route exact path="/"
          render={() => <Home/>}/>

<Route path="/about"
          render={() => <About/>}/>

<Route path="/contact"
          render={() => <Contact/>}/>

        <Route path="/:post_id"
          render={props => <Post {...props}/>}/>
          </Switch>
      </div>
      </BrowserRouter>
    )
  }
}
