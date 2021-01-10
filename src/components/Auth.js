import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Auth = props => {
console.debug(axios.defaults.headers.common['Authorization'])
  return( 
    axios.defaults.headers.common['Authorization'] ? props.children : <Redirect to={'/login'} />
    )
}

export default Auth;