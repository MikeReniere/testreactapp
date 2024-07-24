import { useState } from 'react';

// this is a custom hook. advantages of this one:
// it takes away repetitive code from Form.js

export function useFormInput(initialValue){
const [value, setValue] = useState(initialValue);

function handleChange(e) {
    setValue(e.target.value);
}

const inputProps = {
    value: value,
    onChange: handleChange
};

return inputProps;
}