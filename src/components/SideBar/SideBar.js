import React, { useContext } from 'react';
import './SideBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import OrderList from '../OrderList/OrderList';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddService from '../AddService/AddService';
import MakeAddmin from '../MakeAddmin/MakeAddmin';
import ManageService from '../ManageService/ManageService';
import ReviewArea from '../ReviewArea/ReviewArea';
import { userContext } from '../../App';



const SideBar = () => {
    const [user,setUser,servicePhoto,setServicePhoto,paymentError,setPaymentError,paymentSuccess,setPaymentSuccess]=useContext(userContext)
    const found = servicePhoto.find(Element => Element.email === user.email);
   
    return (
       
        <div className="container">
        <Router>
                 <nav className="second-nav">
                     <ul>
                             {
                                 !found ? <div>
                                 <li>
                                 <Link to="/orderlist" style={{ fontSize:'20px', color:'#FFC800'}}>OrderList</Link>
                                 </li>
                                 <li>
                                 <Link to="/review" style={{ fontSize:'20px', color:'#FFC800'}}>Review</Link>
                                 </li>
                              </div>: <div>
                                <li>
                                 <Link to="/orderlist" style={{ fontSize:'20px', color:'#FFC800'}}>OrderList</Link>
                                 </li>
                                 <li>
                                 <Link to="/review" style={{ fontSize:'20px', color:'#FFC800'}}>Review</Link>
                                 </li>
                                <li>
                                <Link to="/addService" style={{ fontSize:'20px', color:'#FFC800'}}>Add Service</Link>
                                </li>
                                <li>
                                <Link to="/makeAdmin" style={{ fontSize:'20px', color:'#FFC800'}}>Make Admin</Link>
                                </li>
                                <li>
                                <Link to="/manageService" style={{ fontSize:'20px', color:'#FFC800'}}>Manage Service</Link>
                                </li>
                           </div>
                             }

                     </ul>
                 </nav>
                 <Switch>
                     <Route path="/orderList">
                         <OrderList></OrderList>
                     </Route>
                     <Route path="/addService">
                         <AddService></AddService>
                     </Route>
                     <Route path="/makeAdmin">
                         <MakeAddmin></MakeAddmin>
                     </Route>
                     <Route path="/review">
                         <ReviewArea></ReviewArea>
                     </Route>
                     <Route path="/manageService">
                         <ManageService></ManageService>
                     </Route>
                     
                 </Switch>
        </Router>
    </div>

    );
};

export default SideBar;