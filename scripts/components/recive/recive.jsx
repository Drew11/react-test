import React, {Component} from 'react';

function Recive() {
    return (
        <label className={"sign-up-form-recive"}>
            <input
                type="checkbox"
                onChange={event => console.log(event.target.checked)}
            />
            <span>Yes, I'd like to recieve the very occasional email with information on new services and discounts</span>
        </label>
    )
}

export default Recive;