import React, { Component } from 'react';
import Name from './name/name';
import Email from './email/email';
import Phone from './phone/phone';
import Country from './country/country';
import Password from './password/password';
import Already from './already/already';
import Submit from './submit/submit'
import Recive from './recive/recive'

function Form (){
    return(
        <form
            className={"sign-up-form"}
        >
            <h1>Sign up</h1>

            <Name/>
            <Phone/>
            <Email/>
            <Country/>
            <Password/>
            <Recive/>
            <Submit/>
            <Already/>

        </form>
    )
}
export default Form;