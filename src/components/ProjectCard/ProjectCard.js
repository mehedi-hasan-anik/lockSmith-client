import React from 'react';

const ProjectCard = ({event}) => {
    return (
        <div className="container card card-area">
        <img style={{width:'100%'}} src={event.image} alt=""/>
         <h5>{event.name}</h5>
         <p>{event.address}</p>
    </div>
    );
};

export default ProjectCard;