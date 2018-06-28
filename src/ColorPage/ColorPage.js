import React, { Component } from 'react';
import axios from 'axios';
import ColorList from '../ColorList/ColorList';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

class ColorPage extends Component{

    
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
        
    render(){
        return(
            <div>
        <h3>Enter Color Here:</h3>
        <input onChange={this.handleColorChange} value={this.state.color} />
        <button onClick={this.sendColorToRedux}>Submit</button>
        <button onClick={this.deleteOneColor}></button>
        <button onClick={this.deleteAllColors}>Delete ALL Colors</button>
        <ColorList />

            </div>
        )
    }
}

export default connect(mapReduxStateToProps) (ColorPage); 