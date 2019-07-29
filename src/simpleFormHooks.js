import React from 'react';
import UseFormState from './hooks/useFormState';

export default function SimpleFormHooks() {
    const [email, updateEmail, resetEmail] = UseFormState('fdf');

    return (
        <div>
            <h1> the value is ...{email} </h1>
            <input type="text" onChange={updateEmail} />
        </div>
    )
}