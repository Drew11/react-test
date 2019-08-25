import React, { Component } from 'react';
import {connect} from "react-redux";

function Email ({setEmail}) {
    return(
        <label
            className={"sign-up-form-email"}
            htmlFor={"email"}
        >
            <input
                onChange={setEmail}
                name={"email"}
                type="text"
                placeholder="Email address"
            />
        </label>
    )
}

const mapDispatchProps = (dispatch)=>{
    return {
        setEmail: (event)=> dispatch({
            type: 'SET_EMAIL',
            email: event.target.value
        })
    }
};
export default connect(null, mapDispatchProps)(Email);