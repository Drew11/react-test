import React, {Component} from 'react';
import {connect} from 'react-redux';

function Country({countries, setCountry}) {
    return (
        <label
            className={"sign-up-form-country"}
            htmlFor="country"
        >
            <select
                name="country"
                defaultValue={"Select country"}
                onChange={setCountry}>

                <option
                    value="Select country"
                    disabled selected
                >
                    Select country
                </option>


                {countries.map((country) => {
                    return <option
                        value={country['country_code']}
                        key={country.id}
                    >
                        {country.name}
                    </option>
                })}
            </select>
        </label>
    )
}

const mapState = (state) => ({
    countries: state.countries
});

const mapDispatchProps = (dispatch) => {
    return {
        setCountry: (event) => dispatch({
            type: 'SET_COUNTRY',
            country: event.target.value
        })
    }
};

export default connect(mapState, mapDispatchProps)(Country);