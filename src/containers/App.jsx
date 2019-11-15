import React, { Fragment } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Layout, Router } from '../components'
import { AuthDataProvider } from '../authentication'

import "./App.scss";

const App = () => (
  <Fragment>
    <BrowserRouter>
      {/* AuthDataProvider gives access to the auth dataset */}
      <AuthDataProvider>
        <div className="App-header">
          <Link className="App-link" to="/home">Home (Public)</Link>
          <Link className="App-link" to="/profile">Profile (Login required)</Link>
          <Link className="App-link" to="/admin">Admin (Access required)</Link>
        </div>
        <Layout>
          <Router />
        </Layout>
      </AuthDataProvider>
    </BrowserRouter>
  </Fragment>
);

export default App