import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault()
    const formData = {
      firstName: firstName,
      lastName: lastName
    }
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray)
    setFirstName('')
    setLastName('')
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  // Use if you have a server to send data to. Passing props into form and using when sending data
  // function handleSubmit(event) { // create submit handler function
  //   event.preventDefault() // dont forget e.preventDefault for onSubmit events
  //   const formData = { // create an object formData based on values of {firstName} and {lastName} stored in state
  //     firstName: firstName,
  //     lastName: lastName
  //   }
  //   props.sendFormDataSomewhere(formData) // when a form is submitted it needs to send that form data somewhere
  //   // in tradition html it's to a server or another page utilizing the action attribute
  //   //in React think of sendFormDataSomewhere as the code that handles sending our data off
  //   // this must be defined in the same form component or passed as a prop if needed
  //   setFirstName("")
  //   setLastName("") // this clears out the input fields once submitted by setting state to empty strings
  // }

  return (
    <div>
       <form onSubmit={handleSubmit}> 
         {/* add onSubmit event lsitener to form element with function thats gonna handle the submit */}
       <input type="text" onChange={handleFirstNameChange} value={firstName} />
       <input type="text" onChange={handleLastNameChange} value={lastName} />
       <button type="submit">Submit</button>
       </form>
       <h3>Submissions</h3>
       {listOfSubmissions}
    </div>
  );
}

export default Form;
