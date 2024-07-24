//import { useState } from 'react';
import { useFormInput } from './useFormInput.js';

// this is an example of how hooks have independent state variables
// and effecfts of eachother
export default function Form() {
//   const [firstName, setFirstName] = useState('Mary');
//   const [lastName, setLastName] = useState('Poppins');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <label>
//         First name:
//         <input value={firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name:
//         <input value={lastName} onChange={handleLastNameChange} />
//       </label>
//       <p><b>Good morning, {firstName} {lastName}.</b></p>
//     </>

    // this calls useFormInput twice because the state variables are seperate from eachother
    // a custom hook links components, but it doesnt mean the state variables are the same
    const firstNameProps = useFormInput('Mary');
    const lastNameProps = useFormInput('Poppins');

    return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
    </>

  );
}
