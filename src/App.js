import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import ColorList from './ColorList/ColorList';
import ColorPage from './ColorPage/ColorPage';
import Counter from './Counter/Counter';
import { HashRouter as Router, Route, Link} from 'react-router-dom';



// Allowing us to access reduxState on props
const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})


class App extends Component{
  render(){
    console.log('Rendering App.js');
    return (
      <div className="App">
        <pre>{JSON.stringify(this.props.reduxStore)}</pre>
        {/* The value of the reducer will be what state is */}
        <Router>
          <div>
          <Route exact path = '/' component={ColorPage} />
          <Route exact path = '/counter' component={Counter} />
          <Link to='/counter'> Counter Page </Link>
          </div>
          
        </Router>
        
        {/* <Counter />        
        <ColorPage /> */}
        
      </div>
    );
  }
}

// connect() allows us to dispatch
// connect(mapReduxStateToProps) to access information
export default connect(mapReduxStateToProps)(App); // Currying, a function that returns a function
