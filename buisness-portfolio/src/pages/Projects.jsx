import React from "react";
import { CgWebsite} from 'react-icons/cg';
import {FaGithub} from 'react-icons/fa';

function Project(props) {
    return (
        <div>
            <div className="container">
                {props.projects.map((project)=> (
                      <div className="">
                      <div className="">
                          <div className="card shadow">
                              <p className="card-header bg-info" key={project.id}>
                                  {project.title}
                              </p>
                              <a href={project.live} target="_blank" rel="noreferrer">
                                  <img className="portcard"
                                  src={process.env.PUBLIC_URL + project.image}
                                  alt="Placeholder image"
                                  />
                              </a>
                              <div className="link px-2">
                                  <div>
                                      <a href={projects.repo} target="_blank" rel="noreferrer">
                                          <FaGithub size={20} />
                                      </a>
                                  </div>
                                  <div>
                                      <a href={project.live} target="_blank" rel="noreferrer">
                                          <CgWebsite size={20} />
                                      </a>
                                  </div>
                              </div>
                          </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;