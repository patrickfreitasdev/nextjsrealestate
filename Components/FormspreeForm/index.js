import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Input } from 'Components/Input';

export const FormspreeForm = ({ formId }) => {

    const [state, handleSubmit] = useForm(formId);
    if (state.succeeded) {
        return (<div className="max-w-5xl mx-auto my-5"><p>Thanks for joining!</p> </div >);
    }

    return (
        <div className="max-w-5xl mx-auto my-5">
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email Address
                </label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <div>
                    <textarea
                        className='rounded border-slate-400 border-2 p-1 hover:border-slate-500'
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <button className='btn' type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
        </div>
    )
}
