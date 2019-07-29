import { useState } from 'react';
export default (...args) => {
    const [value, setValue] = useState();
    const handlechange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [value, handlechange, reset];
}