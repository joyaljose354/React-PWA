/*
  App 
*/

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import {client} from '../../utils/apiHandler';
import Navbar from '../../Components/NavBar';
import Routes from '../../utils/Routes';

function App() {

  return (
    <ApolloProvider client={client}>
      <div>
           <Navbar/>
           <Routes/>
      </div>
    </ApolloProvider>

  )
}

export default App;
