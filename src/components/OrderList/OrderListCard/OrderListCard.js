import React, { useContext } from 'react';
import { userContext } from '../../../App';

const OrderListCard = ({event}) => {
    return (
        <div className="container">
        <div className="card" style={{padding:'10px',marginTop:'10px'}}>
            <img src={event.image} alt="" style={{width:'100px'}}/>
            <h5 style={{color:'#FFC800'}}> {event.serviceName}</h5>
            <p> description : {event.description}</p>
            <p>Order date : {new Date(event.date).toDateString('dd/MM/yyyy')}</p>
        </div>
      </div>
    );
};

export default OrderListCard;