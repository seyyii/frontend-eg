import React from 'react';
import {Route} from "react-router-dom";
import NavBarComponent from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends React.Component {
  render(){
    return(
      <div className='container-fluid'>
        <NavBarComponent />
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/post' component={Post}/>

      </div>
    )
  }
}

export default App;
