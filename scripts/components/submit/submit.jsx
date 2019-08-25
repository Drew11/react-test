import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loader} from './loader'

class Submit extends Component{
    constructor(){
        super();
        this.state={
            sendingData:false
        };
    }

    switchState = ()=>{
        this.setState((prevState)=>({
            ...prevState,
            sendingData:!this.state.sendingData
        }));
    };

    sendFormData = async(event)=>{
       event.preventDefault();

       const {userData} = this.props;
       await fetch('http://localhost:3002/register', {
                  method:'POST',
                  body: JSON.stringify(userData),
                  headers:{
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  }
              })
              .then(res=>res.json())
              .then(response=>{
                  setTimeout( ()=>{
                      this.props.setResponse(response);
                      this.switchState();
                  },2000);
              });

             this.switchState();
    };

    render(){
        return(
            <button
                className={"sign-up-form-submit"}
                onClick={this.sendFormData}
            >
                {this.state.sendingData?
                    loader():
                    "Create An Account"
                }
            </button>
        )
    }
}

const mapState = (state)=>({
      userData: state.userData,
      responseStatus: state.responseStatus
});

const mapDispatchProps = (dispatch)=>{
    return {
       setResponse: (responseStatus)=> dispatch({
               type: 'SET_RESPONSE',
               responseStatus: responseStatus
       })
    }
};

export default connect(mapState, mapDispatchProps)(Submit);
