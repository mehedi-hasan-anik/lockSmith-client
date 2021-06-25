import React from 'react';
import './ManageServiceCard.css';

const ManageServiceCard = ({event}) => {
  
    const handleDelete = id =>{
        fetch(`https://cryptic-spire-90197.herokuapp.com/delete/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify()
        })
    }
    return (
        <div className="container card card-area manageCardArea">
            <img style={{width:'100%',height:'200px'}} src={event.imageURL} alt=""/>
            <h5>{event.title}</h5>
            <p>{event.description}</p>
            <p>{event.price}</p>
            {/* <button onClick={()=>handleCheckOut(event._id)} style={{background:'blue', color:'#fff'}}>Buy Now</button> */}
            <button onClick={()=>handleDelete(event._id)}>Delete</button>
        </div>
    );
};

export default ManageServiceCard;