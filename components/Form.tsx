'use client'

import { useState } from "react";

export default function Form({ data }) {
  const [state, setState] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/dynamic/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    if (response.ok) {
      console.log("Data submitted successfully");
    } else {
      console.error("Error submitting data");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={state?.name || ''} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}