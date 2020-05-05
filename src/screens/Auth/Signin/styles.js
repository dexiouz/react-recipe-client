import styled from "styled-components";

export const Form = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  > form {
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    > button {
      background-color: #004cff;
      color: #fff;
    }
  }
`;
