import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as Provider } from "@apollo/react-hooks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./index.css";
import App from "../src/App";
import Home from "../src/screens/Home/";
import Signin from "../src/screens/Auth/Signin";
import Signup from "../src/screens/Auth/Signup";
const client = new ApolloClient({
  uri: "http://localhost:4444/graphql",
});

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider client={client}>
        <Root />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
