import React, {useRef} from "react";
import contact from "../assets/styles/contact.css";
import send from '../assets/images/sendmail.jpeg';
import {AiOutlineMail} from 'react-icons/ai';
import {BsMessenger} from 'react-icons/bs';
import emailjs from "emailjs-com";
import e from "express";

const Contact = () => {
    e.preventDefault();

    // lets user know message was sent 
    const feedbackEL = document.querySelector('.feedback');
    feedbackEl.setAttribute('class', 'feedback');
    setTimeout(function(){
        feedbackEL.setAttribute('class','feedback hide');

    },4000);

    // left off on emailjs
    
}