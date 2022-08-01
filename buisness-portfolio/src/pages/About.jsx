import React from 'react';
import cloud from '../assets/photos'

function About() {
    return (
        <>
        <section className="text-white pt-4">
            <h2> About ME</h2>
        </section>
        <section className="about-container"></section>
        <section className= 'text-white pt-4'>

            <div className="bio container">
                <p className='aboutMe text-white'>
                    Hello my name is Angel Santos, Currently employeed as a Quality Technician II and a part-time
                    Student for Full-Stack Web developer. 
                    As of recent I became a father. Now to a one year old on my free time I enjoy taking my son
                     to new places such as: Hiking, Aquariums, park. its so crazy to see the world through his eyes ! 
                </p>
                <div className="aboutMe-img">
                    <img src={cloud} alt='' height='220'/>
                    <a 
                    href={process.env.PUBLIC_URL + "/Angel-Santos-Resume.pdf"}
                    target='_blank' rel='noreferrer'
                    >
                        <button className='dl btn btn-primary'>Download Resume</button>
                        </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;