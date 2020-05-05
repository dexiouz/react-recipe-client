import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_RECIPES } from "../queries";

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_RECIPES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There was an Error {console.log(error, "error")}</p>;
  console.log(data);
  return <div className="App">Home</div>;
};

export default App;
