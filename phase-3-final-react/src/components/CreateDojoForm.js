import React, { useState } from "react";

const CreateDojoForm = ({ dojoList, setDojoList }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/dojos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
      }),
    })
      .then((r) => r.json())
      .then((newDojo) => {
        setDojoList([...dojoList, newDojo]);
      });
  }

  return (
    <div>
      <h2>Create a dojo!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          value={formData.name}
          name='name'
          placeholder='Enter a dojo name'
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateDojoForm;
