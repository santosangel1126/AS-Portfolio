import React from 'react';
 
function Resume() {
    return (
        <section>
            <hi id="resume">Resume</hi>
            <div className='my-2'>

                <a data-testid='link' href='/'>Download my Resume</a>

                <h2>Front-end Profeciencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>

                <h2>Back-end Profeciencies</h2>
                <ul>
                    <li>API's</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>REST</li>
                    <li>GraphQL</li>


                </ul>
            </div>
        </section>
    )
}

export default Resume;
//function ContactForm 