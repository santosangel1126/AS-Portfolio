import React from 'react';
import {Link} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import {AifillLinkedin} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import{IoIoPaper} from 'react-icons/io';
import flying from '../Assets/images/flying.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Global() {
    return(
        <section>
            <header>
                <img src={flying} alt="" />
                <nav className='navbar navbar-dark bg-black nav-pills justify-content-end px-2'>
                    <Link className='navTop text-white px-2' to='/'>
                        Home
                    </Link>
                    <Link className=' navTop text-white px-2' to='/about'>
                        About
                    </Link>
                    <Link className='navTop text-white px-2' to='/project'>
                        Projects
                    </Link>
                    <Link className='navTop text-white px-2' to='/contact'>
                        Contact
                    </Link>
                </nav>
            </header>
            <footer className='contact mt-auto'>
                <a
                href="https://github.com/santosangel1126"
                className='contactEl'
                target='_blank'
                rel="noreferrer"
                >
                    <FaGithub size={25} />
                </a>
                <a className='contactEl' href="mailto: iiisantosjangel@gmail.com">
                    <AiOutlineMail size={25} />
                </a>
                <a 
                href='https://www.linkedin.com/in/angel-santos-61b48a184/'
                className='contactEl'
                target="_blank"
                rel="noreferrer"
                >
                    <AifillLinkedin size={25} />
                </a>
                <a
                className='ContactEl'
                href={process.env.PUBLIC_URL + './AngelSantosResume.png'}
                target='_blank'
                rel='noreferrer'
                >
                    <IoIoPaper size={25} />
                </a>
            </footer>
        </section>
    );
}

export default Global;