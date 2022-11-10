import React, { useState } from "react";

const CreateCharacterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    portrayed: "",
    image: "",
  });
  

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  

  function handleSubmit() {}

  return (
    <div>
      <h2>Add a character!</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleChange}
          value={formData.name}
          name="name"
          placeholder='Enter a character name'
        />
       
        <input
          type='text'
          onChange={handleChange}
          value={formData.portrayed}
          placeholder="Enter the actor's name "
          name="portrayed"
        />
        
        <input
          type='text'
          onChange={handleChange}
          value={formData.image}
          placeholder='Enter an image url'
          name="image"
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default CreateCharacterForm;
