import React from "react";



  function Form({ firstName,lastName, handleFirstName, handleLastName,}) {

  return (
    <form>
      <input type="text" onChange={handleFirstName}value={firstName} />
      <input type="text" onChange={handleLastName} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
