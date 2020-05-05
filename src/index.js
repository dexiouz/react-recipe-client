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
  Link,
} from "react-router-dom";
import "./index.css";
import App from "./components/App";
import Signin from "../src/components/Auth/Signin";
import Signup from "../src/components/Auth/Signup";
const client = new ApolloClient({
  uri: "http://localhost:4444/graphql",
});

const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Signup} />
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
