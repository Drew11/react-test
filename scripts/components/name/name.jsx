import React, {Component} from 'react';
import {connect} from "react-redux";

function Name({setName}) {
    return (
        <label
            htmlFor={"name"}
            className={"sign-up-form-name"}
        >
            <input
                name={"name"}
                type="text"
                placeholder={"Name"}
                onChange={setName}
            />
        </label>
    )
}

const mapDispatchProps = (dispatch) => {
    return {
        setName: (event) => dispatch({
            type: 'SET_NAME',
            name: event.target.value
        })
    }
};
export default connect(null, mapDispatchProps)(Name);