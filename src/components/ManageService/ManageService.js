import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';

const ManageService = () => {
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

    const manageResult = servicePhoto.filter(event=> event.imageURL);
    
    return (
        <div className="container mt-5">
           
          {
              loading &&  <div className="row">
              {
                  manageResult.map(event=> <div className="col-lg-4 col-md-6 col-sm-12 col-area"><ManageServiceCard event={event}></ManageServiceCard></div>)
              }
            </div> 
           
          }
       
       </div>
    );
};

export default ManageService;