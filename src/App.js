import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import ColorList from './ColorList/ColorList';
import axios from 'axios';

// Allowing us to access reduxState on props
const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
      count: 0
    }
  }

  handleColorChange = (event) => {
    this.setState({
      color: event.target.value
    
    })
  }
//TODO: rename to sendColorToServer
  sendColorToRedux = () => {
    // Send the color to redux with an action type of ADD_COLOR
    // 
    const body = {name: this.state.color, count: this.props.reduxStore.counterReducer};
    axios.post('/api/colors', body)
    .then((response)=>{
      this.refreshData();

    }).catch((error)=>{
      console.log('Error in POST', error);
    })
  }

  deleteAllColors = () => {
    axios.delete('api/colors').then((response)=>{
      console.log('in axios.delete', response);
      this.refreshData();
    }).catch((error)=>{
      console.log('Error in axios.delete', error);
      alert('Call your mommy');
    })
    
  }

  deleteOneColor = () =>{
console.log('in deleteOneColor()');

  }
refreshData() {
  axios.get('/api/colors').then((response)=>{
    console.log(response.data);
    const action = {type: 'SET_COLORS', payload: response.data};
    this.props.dispatch(action);

  }).catch((error)=>{
    console.log('error in get call your mom', error)
    alert('You better call your mommy')
  })

}
  componentDidMount() {

    this.refreshData();
  
  }
  

  render() {
    console.log('Rendering App.js');
    return (
      <div className="App">
        <pre>{JSON.stringify(this.props.reduxStore)}</pre>
        {/* The value of the reducer will be what state is */}
        <div>{this.props.reduxStore.counterReducer}</div>
        {/* dispatch takes in an action */}
        <button onClick={() => this.props.dispatch({type: 'ADD'})}>Add</button>
        {/* Subtract button */}
        <button onClick={() => this.props.dispatch({type: 'SUBTRACT'})}>Subtract</button>

        <h3>Enter Color Here:</h3>
        <input onChange={this.handleColorChange} value={this.state.color} />
        <button onClick={this.sendColorToRedux}>Submit</button>
        <button onClick={this.deleteOneColor}></button>
        <button onClick={this.deleteAllColors}>Delete ALL Colors</button>
        <ColorList />
        
      </div>
    );
  }
}

// connect() allows us to dispatch
// connect(mapReduxStateToProps) to access information
export default connect(mapReduxStateToProps)(App); // Currying, a function that returns a function
