import React from "react";
import road from '../Assets/images/road.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return(
        <section className="text-white pt-4">
            <h2 className="name">Angel Santos</h2>
            <h2>Full Stack Web Developer</h2>
            <img src={road} alt='' />
        </section>
    );
}

export default Home;