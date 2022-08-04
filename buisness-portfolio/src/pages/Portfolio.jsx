import React from 'react';
import Project from './Project';

const projects = [
    {
       title:'Weather Dashboard',
       image: '/images/weather.png',
       repo:'https://github.com/santosangel1126/Weather-Dashboard.git',
       live:'https://santosangel1126.github.io/Weather-Dashboard/',
    },
    {
        title:"Professional README generator",
        video:"/images/README.mp4",
        repo:"https://github.com/santosangel1126/professional-generator.git",
        live:""
      },
      {
         title:"Note Taker",
         image:"/images/Note-taker.png",
         repo:"https://github.com/santosangel1126/Note-taker.git",
         live:"https://santosangel1126.github.io/Note-taker/"
       },
       {
         title:"ANIBITE",
         image:"/images/Anibite.png",
         repo:"https://github.com/blakee-marcus/turbo-octo-spoon.git",
         live:"https://github.com/blakee-marcus/turbo-octo-spoon"
       },
       {
         title:"Sanchez Detailing",
         image:"/images/Sanchez.png",
         repo:"https://github.com/santosangel1126/Sanchez-Detailing.git",
         live:"https://github.com/santosangel1126/Sanchez-Detailing"
       },
       {
         title:"",
         image:"",
         repo:"",
         live:""
       },
];

function Portfolio() {
   return(
      <div>
         <section>
            <h2 className='text-white text-center pt-4'>Portfolio</h2>
            <Project projects={projects} />
         </section>
      </div>
   );
}

export default Portfolio;