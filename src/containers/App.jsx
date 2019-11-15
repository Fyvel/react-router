import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout, Router } from '../components'

const App = props => (
  <React.Fragment>
    🏠 ☎️ 🎍
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  </React.Fragment>
);

export default App