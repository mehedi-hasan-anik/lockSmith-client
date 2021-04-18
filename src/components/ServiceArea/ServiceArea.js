import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import Photo from '../Photo/Photo';

const ServiceArea = () => {
    // const [servicePhoto,setServicePhoto]=useState([]);
    const [user,setUser,servicePhoto,setServicePhoto]=useContext(userContext);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        fetch('http://localhost:8080/servicePhoto')
        .then(res=>res.json(res))
        .then(data=>{
            setServicePhoto(data)
            setLoading(true)
        })
    },[])
   
    const homeResult = servicePhoto.filter(event=> event.imageURL);
    console.log("result",homeResult);

    return (
        <div className="container" style={{marginTop:'100px'}}>

            <h2 className="text-center mb-5 text-primary">Service</h2>
           
          {
              loading &&  <div className="row">
              {
                  homeResult.map(event=> <div className="col-lg-4 col-md-6 col-sm-12 col-area"><Photo event={event}></Photo></div>)
              }
            </div> 
           
          }
       
       </div>
    );
};

export default ServiceArea;