import React, { Component } from 'react';
import {connect} from 'react-redux';

function Phone ({countries, setDialCode }) {

    return(
        <label
            className={"sign-up-form-phone"}
            htmlFor={'dialCode'}
        >

            <select
                id="dialCode"
                name="dialCode"
                defaultValue="code"
                onChange={setDialCode}
            >
                <option
                    value="code"
                    disabled selected
                >
                    Code
                </option>

                {countries.map(country=>{

                    const fullPhoneNumber = `+${country['dial_code']} ${country['name']}`;
                    return<option
                           key={country['id']}
                           value={country['dial_code']}
                          >
                            {fullPhoneNumber}
                          </option>
                    })
                }
            </select>

            <input
                placeholder="Phone number"
                type="text"
            />

        </label>
    )
}

const mapState = (state)=>({
    countries: state.countries
});

const mapDispatchProps = (dispatch)=> {
    return {
        setDialCode: (event) => dispatch({
            type: 'SET_DIAL_CODE',
            dialCode: event.target.value
        }),
    }
};
export default connect(mapState, mapDispatchProps)(Phone);