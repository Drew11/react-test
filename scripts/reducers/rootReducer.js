import { createStore } from 'redux';

const initialState = {
    countries: [],
    responseStatus: {},
    userData:{
        name: '',
        dialCode: '',
        email: '',
        country: '',
        password: '',
        passwordConfirmation:''
    }
};

const reducer = (state, action)=>{
   switch (action.type){
       case 'SET_COUNTRIES':
           return {
               ...state,
               countries: action.countries
           };
       case 'SET_RESPONSE':
             return  {
                 ...state,
                 responseStatus: action.responseStatus
             };
       case 'SET_NAME':
             return {
                 ...state,
                 userData: {...state.userData,
                                name: action.name
                           }
             };
       case 'SET_DIAL_CODE':
           return {
               ...state,
               userData: {...state.userData,
                   dialCode: action.dialCode
               }
           };
       case 'SET_EMAIL':
           return {
               ...state,
               userData: {...state.userData,
                   email: action.email
               }
           };
       case 'SET_COUNTRY':
           return {
               ...state,
               userData: {...state.userData,
                   country: action.country
               }
           };
       case 'SET_PASSWORD':
           return {
               ...state,
               userData: {...state.userData,
                   password: action.password
               }
           };
       case 'CONFIRM_PASSWORD':
           return {
               ...state,
               userData: {...state.userData,
                   passwordConfirmation: action.passwordConfirmation
               }
           } ;
       default:
           return state;
   }

};

const store = createStore(reducer, initialState);

store.subscribe(()=>console.log(store.getState()))
export default store;