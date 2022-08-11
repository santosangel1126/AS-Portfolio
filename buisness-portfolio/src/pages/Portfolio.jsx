import React from 'react';
import Project from './Projects';

const projects = [
    {
       title:'Weather Dashboard',
       image: '../src/Assets/images /weather.png',
       repo:'https://github.com/santosangel1126/Weather-Dashboard.git',
       live:'https://santosangel1126.github.io/Weather-Dashboard/',
    },
    {
        title:"Professional README generator",
        video:"../src/Assets/images/README.mp4",
        repo:"https://github.com/santosangel1126/professional-generator.git",
        live:""
      },
      {
         title:"Note Taker",
         image:"../src/Assets/images/Note-taker.png",
         repo:"https://github.com/santosangel1126/Note-taker.git",
         live:"https://santosangel1126.github.io/Note-taker/"
       },
       {
         title:"ANIBITE",
         image:"../src/Assets/images/Anibite.png",
         repo:"https://github.com/blakee-marcus/turbo-octo-spoon.git",
         live:"https://github.com/blakee-marcus/turbo-octo-spoon"
       },
       {
         title:"Sanchez Detailing",
         image:"../src/Assets/images/Sanchez.png",
         repo:"https://github.com/santosangel1126/Sanchez-Detailing.git",
         live:"https://github.com/santosangel1126/Sanchez-Detailing"
       },
       {
         title:"Ever After Bakery",
         image:"../src/Assets/images/bakery.png",
         repo:"https://github.com/Azurene/ever-after-bakery.git",
         live:"https://ever-after-bakery.herokuapp.com/"
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