import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SIGNIN_USER } from "../../../gql/mutations";
import { Form } from "./styles";
import { Error } from "../../../components/Error";

const initialState = {
  username: "des",
  password: "password1@",
};
const Index = () => {
  const [state, setState] = useState({ ...initialState });
  const { username, password } = state;
  const clearState = () => setState({ ...initialState });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const [signinUser, { loading, error }] = useMutation(SIGNIN_USER);

  const validateForm = () => {
    const isInvalid = !username || !password;
    return isInvalid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: state.username,
      password: state.password,
    };
    signinUser({
      variables: { data },
    })
      .then(({ data: { signinUser } }) => {
        console.log(signinUser);
        localStorage.setItem("token", signinUser.token);
        // clearState();
      })
      .catch((err) => console.log(err, "err"));
  };
  return (
    <Form className="App" onSubmit={(e) => handleSubmit(e)}>
      <h2>Sign In</h2>
      <form classname="form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
        <button
          disabled={loading || validateForm()}
          style={{
            backgroundColor: loading || validateForm() ? "grey" : "#004cff",
          }}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        {error && <Error error={error} />}
      </form>
    </Form>
  );
};

export default Index;
