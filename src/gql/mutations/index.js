import { gql } from "apollo-boost";

export const SIGNUP_USER = gql`
  mutation($data: signupUserData!) {
    signupUser(data: $data) {
      token
    }
  }
`;
export const SIGNIN_USER = gql`
  mutation($data: signinUserData!) {
    signinUser(data: $data) {
      token
    }
  }
`;
