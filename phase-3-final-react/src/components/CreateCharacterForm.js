import React from 'react'

const CreateCharacterForm = () => {

  const [formData,setFormData] = useState({
    name: "",
    portrayed: "",
    image: ""
  })
  
  function handleChange(){}

  
  
  
  
  
  return (
    <div>
    <form>
      <h2>Add a character!</h2>
      <input type="text" onChange={handleChange} value={formData.name} />
      <input type="text" onChange={handleChange} value={formData.portrayed} />
      <input type="text" onChange={handleChange} value={formData.image} />
      <button type="submit">Submit</button>
    </form> 
    </div>
  )
}

export default CreateCharacterForm