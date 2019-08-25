import React, { Component } from 'react';
import {connect} from "react-redux";

function Password({setPass, confirmPass}){

    return(
       <React.Fragment>
        <label
            className={"sign-up-form-pass"}
        >
            <input
                name="password"
                type="password"
                placeholder={'Password'}
                onChange={setPass}
           />
        </label>
        <label
             className={"sign-up-form-pass"}
            >
            <input
                name="password"
                type="password"
                placeholder="Confirm password"
                onChange={confirmPass}
            />
         </label>
       </React.Fragment>
    )
}

const mapDispatchProps = (dispatch)=>{
   return{
      setPass: (event)=>dispatch({
          type:'SET_PASSWORD',
          password: event.target.value
      }),
      confirmPass: (event)=> dispatch({
          type:'CONFIRM_PASSWORD',
          passwordConfirmation: event.target.value
      })
   }
};

export default connect(null, mapDispatchProps)(Password);