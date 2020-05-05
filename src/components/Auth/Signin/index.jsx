import React from "react";
import { Form } from "./styles";
const Index = () => {
  return (
    <Form className="App">
      <h2>Sign In</h2>
      <form classname="form">
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />

        <button>Submit</button>
      </form>
    </Form>
  );
};

export default Index;
