import React from 'react';
import { capitalizeFirstLetter} from "../../utils/helpers";

function Project (props) {
    const { projectImages } = props;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(projectImages)}</h1>
            {/* <img
                src={require(`../../assets/photos/${projectImages}.jpg)}
                alt={}
                classname ='img-thumbnail mx-1'
                key={image.name}
    /> */}

            
        </section>
    )
}

export default Project;