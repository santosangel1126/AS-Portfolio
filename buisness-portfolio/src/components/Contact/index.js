import React, { useState } from 'react';
import {validateEmail} from '../../utils/helpers';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '',email:'',mesage:''});
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement 
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }else{
                if (!e.target.value.length){
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
                console.log('errorMessage', errorMessage);
            }

            if (!errorMessage){
                setFormState({...formState, [e.target.name]: e.target.value});
            }
        }

        console.log(formState);

        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState);
        }
        //JSX
         return (
            <section>
                <h1 data-testid="h1tag">Contact Me:</h1>
                <form id="Contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email Address:</label>
                        <input type="email" name='email' defaultValue={email} onBlur={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='mesage'>Message:</label>
                        <textarea name='message' rows='6' defaultValue={message} onBlur={handleChange}/>
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid="button" type='submit'>Submit</button>
                </form>
            </section>
         )
        }
    
export default ContactForm;