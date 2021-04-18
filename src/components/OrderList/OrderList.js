import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrderListCard from './OrderListCard/OrderListCard';


const OrderList = () => {
    const [bookings,setBookings]=useState([])
    const [allBookings,setAllBookings]=useState([])
    const [user,setUser,servicePhoto,setServicePhoto,paymentError,setPaymentError,paymentSuccess,setPaymentSuccess]=useContext(userContext);

    useEffect(()=>{
        fetch('http://localhost:8080/getOrder?email='+user.email)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])

    useEffect(()=>{
        fetch('http://localhost:8080/getAllOrder')
        .then(res=>res.json())
        .then(data=>setAllBookings(data))
    },[])
    

    const found = servicePhoto.find(Element => Element.email === user.email);
    

    return (
        <div className="container">
            <h1 style={{textAlign:'center'}}>Service List </h1>
            <h3 style={{textAlign:'center'}}>{user.name}</h3>
            <div className="row">
                {
                    found ?<div>
                         {
                        allBookings.map(event=> <OrderListCard event={event}></OrderListCard> )
                        }
                    </div>: <div>
                      {
                        bookings.map(event=> <OrderListCard event={event}></OrderListCard> )
                      }
                    </div>
                }
                
            </div> 
      </div>
    );
};

export default OrderList;