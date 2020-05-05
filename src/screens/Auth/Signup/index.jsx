import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SIGNUP_USER } from "../../../gql/mutations";
import { Form } from "./styles";
import { Error } from "../../../components/Error";

const initialState = {
  username: "",
  password: "",
  email: "",
  comfirmPassword: "",
};
const Index = () => {
  const [state, setState] = useState({ ...initialState });
  const { username, password, email, comfirmPassword } = state;
  const clearState = () => setState({ ...initialState });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const [signupUser, { loading, error }] = useMutation(SIGNUP_USER);

  const validateForm = () => {
    const isInvalid =
      !username || !email || !password || password !== comfirmPassword;
    return isInvalid;
  };
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
      .then(({ data: { signupUser } }) => {
        console.log(signupUser);
        localStorage.setItem("token", signupUser.token);
        clearState();
      })
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
        <button
          disabled={loading || validateForm()}
          style={{
            backgroundColor: loading || validateForm() ? "grey" : "#004cff",
          }}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
        {error && <Error error={error} />}
      </form>
    </Form>
  );
};

export default Index;
