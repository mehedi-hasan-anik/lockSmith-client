import React from 'react';
import Washinton from '../image/bernard-hermant-6ftZuO_-b64-unsplash 1.png';
import Luxury from '../image/Mask Group.png';
import Gorgeous from '../image/Mask Group-1.png';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectArea = () => {
    const projectList = [
        {
            name:'Villa on Washinton Avenue',
            image:Washinton,
            address:'Dhaka,Bangladesh'
        },
        {
            name:'Luxury Villa in Rongo Park',
            image:Luxury,
            address:'Dhaka,Bangladesh'
        },
        {
            name:'Gorgeous House',
            image:Gorgeous,
            address:'Dhaka,Bangladesh'
        }
    ]
    return (
        <div className="container" style={{marginTop:'100px'}}>
            <h5 className="text-center ">Projects</h5>
            <h3 className="text-center" style={{color:'#0000FF'}}>Discover the latest interior Design <br/> available today</h3>
            <div className="row mt-5">
                {
                    // projectList.map(event=><ProjectCard event={event}></ProjectCard>)
                    projectList.map(event=> <div className="col-lg-4 col-md-6 col-sm-12 col-area"><ProjectCard event={event}></ProjectCard></div>)
                }
            </div>
            
        </div>
    );
};

export default ProjectArea;