import React,{useState} from "react";

const CreateDojoForm = () => {

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
    fetch("http://loclahost:9292/dojos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name
      })
    })
      .then((r) => r.json())
      .then((newDojo)=> console.log(newDojo))

  }

  return (
    <div>
      <h2>Add a dojo!</h2>
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
