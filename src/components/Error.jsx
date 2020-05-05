import React from "react";

export const Error = ({ error }) => (
  <p style={{ color: "red" }}> {error.message}</p>
);
