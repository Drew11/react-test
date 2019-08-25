import React, { Component } from 'react';
import {connect} from 'react-redux';

function Complete({setResponse}) {

    return (
        <div
            className={"register_complete"}
        >
                     <span>
                      <input type="checkbox"
                             defaultChecked={true}
                      />
                         Great!
                    <div
                        onClick={()=> setResponse({})}

                        className={"register_complete-close"}
                    >
                     </div>
                     </span>
            <span>your account has been successfully created.</span>
        </div>
    )
}

const mapDispatchProps = (dispatch) => {
    return {
        setResponse: (responseStatus)=> dispatch({
            type: 'SET_RESPONSE',
            responseStatus: responseStatus
        })
    }
};

export default connect(null, mapDispatchProps)(Complete);