import React from 'react';
import { useHistory } from 'react-router';
import './Photo.css'

const Photo = ({event}) => {
    console.log('price',event);
    
    const history = useHistory();
    const handleCheckOut = id =>{
        history.push(`/order/${id}`);
    }
    return (
      <div className="cart-area">
         <div className="container">
           <div className="card inner-cart-area">
                <img style={{width:'100%',height:'200px'}} src={event.imageURL} alt=""/>
                <h5>{event.title}</h5>
                <p>{event.description}</p>
                <p>${event.price}</p>
                <button onClick={()=>handleCheckOut(event._id)} >Get Now</button>
           </div>
          </div>
      </div>
    );
};

export default Photo;