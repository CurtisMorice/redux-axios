import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const mapReduxStateToProps = (reduxStore) => ({

    reduxStore
})

class Counter extends Component{
    render(){
        return(

        <div>

        <div>{this.props.reduxStore.counterReducer}</div>
        {/* dispatch takes in an action */}
        <button onClick={() => this.props.dispatch({type: 'ADD'})}>Add</button>
        {/* Subtract button */}
        <button onClick={() => this.props.dispatch({type: 'SUBTRACT'})}>Subtract</button>
        <br />
        <Link to= "/"> Color Page </Link>

        </div>
        )
    }

}

export default connect(mapReduxStateToProps)(Counter); 