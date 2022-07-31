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
            }else{
                if (!e.target.value.length){
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
                comsole.log('errorMessage', errorMessage);
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
        
        }
    }
}