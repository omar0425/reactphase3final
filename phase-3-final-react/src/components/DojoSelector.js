import React, { useState } from "react";

const DojoSelector = ({ dojoList, id }) => {
  const [dojoId, setDojoId] = useState(0);

  function onCategoryChange(dojo) {
    setDojoId(dojo);
  }


  function handleAddDojo(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/characters/${id}/dojos`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        dojo_id: dojoId,
      }),
    });
  }

  return (
    <form onSubmit={handleAddDojo}>
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
      <button type='submit'>Add to Dojo</button>
    </form>
  );
};

export default DojoSelector;
