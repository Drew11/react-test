import React, {Component} from 'react';
import {connect} from 'react-redux';

function Error({responseStatus}) {

    return (
        <ul
            className={"error-field-value"}
        >
            {responseStatus.errors.map((error, index)=>{
                return (
                    <li key={index}>
                        {`${error.param}: ${error.msg}`}
                    </li>
                )
            })
            }
        </ul>
    )
}

const mapState = (state) => ({
    responseStatus: state.responseStatus
});

export default connect(mapState)(Error);
