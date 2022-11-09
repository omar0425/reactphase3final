import React,{useState} from "react";

const DojoSelector = ({dojoList}) => {
  const[dojoId,setDojoId] = useState("")
  
  function onCategoryChange(dojo){
    setDojoId(dojo)
  }

  function handleAddDojo(){
    const char_dojo = {
      character_id: id,
      dojo_id: dojoId 
      };

    fetch(`http://localhost:9292/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(char_dojo),
    });
  }

  

  
 
  return (
    <form onSubmit ={handleAddToDojo}>
      <select 
      value={dojoId}
      id={dojoId}
      onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value=''>Choose Dojo</option>
        {dojoList.map((dojo) => (
          <option value={dojo.id} key={dojo.id}>
            {dojo.name}
          </option>
        ))}
      </select>
      <button type='submit'>
          Add to Dojo
        </button>
    </form>
  );
};

export default DojoSelector;
