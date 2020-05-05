import React, { useState } from "react";
import { Form } from "./styles";
const Index = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    comfirmPassword: "",
  });
  const { username, password, email, comfirmPassword } = state;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ [name]: value });
  };
  return (
    <Form className="App">
      <h2>Sign Up</h2>
      <form classname="form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={username}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
        <input
          type="password"
          name="comfirmPassword"
          placeholder="Comfirm Password"
          onChange={handleChange}
          value={comfirmPassword}
        />
        <button>Submit</button>
      </form>
    </Form>
  );
};

export default Index;
