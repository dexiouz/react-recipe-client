import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP_USER } from "../../gql/mutations";
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
    setState({
      ...state,
      [name]: value,
    });
  };

  const [signupUser, { loading }] = useMutation(SIGNUP_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: state.username,
      password: state.password,
      email: state.email,
    };
    signupUser({
      variables: { data },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err, "err"));
  };
  console.log(state);
  return (
    <Form className="App" onSubmit={(e) => handleSubmit(e)}>
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
        <button>{loading ? "Loading" : "Submit"}</button>
      </form>
    </Form>
  );
};

export default Index;
