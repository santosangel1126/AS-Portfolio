import React from "react";
import flying from '../Assets/images/flying.png';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return(
        <section className="text-white pt-4">
            <h2 className="name">Angel Santos</h2>
            <h2>Full Stack Web Developer</h2>
            <img className="flying" src={flying} alt='flying'/>
        </section>
    );
}

export default Home;