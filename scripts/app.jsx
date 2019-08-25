import React, { Component } from 'react'
import Form from 'components/form';
import Complete from './components/complete/complete';
import Error from './components/error/error';
import { hot } from 'react-hot-loader'
import {connect} from 'react-redux';

class App extends Component {

 async componentDidMount(){
      const json = await fetch('http://127.0.0.1:3002/countries',
          {method:'GET'}
      ).then((response)=> response.json());

      this.props.setCountries(json);
  }

  checkProps(){
      if (Object.keys(this.props.responseStatus).includes('status')){
          return  <Complete/>;
      }
      if (Object.keys(this.props.responseStatus).includes('errors')){
          return  <Error/>;
      }
  }

  render() {
   this.checkProps();
    return (
     <div className="app">
         <Form/>
         {
             this.checkProps()
         }
     </div>
    )
  }
}

const mapState = (state)=>({
    responseStatus: state.responseStatus
});

const mapDispatchProps = (dispatch) => {
    return {
        setCountries: (countries) => dispatch({
            type: 'SET_COUNTRIES',
            countries: countries
        }),
    }
};

export default connect(mapState, mapDispatchProps)(App);