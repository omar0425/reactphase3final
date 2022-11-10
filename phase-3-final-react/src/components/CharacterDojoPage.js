import React,{useState} from 'react'


const CharacterDojoPage = ({dojoList}) => {
  const[dojoId,setDojoId] = useState(0)

  function onCategoryChange(dojo){
    setDojoId(dojo)
  }
  return (
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
  )
}

export default CharacterDojoPage
