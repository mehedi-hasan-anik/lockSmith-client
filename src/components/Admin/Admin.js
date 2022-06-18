// import SideBar from '../SideBar/SideBar';

import { useContext, useState } from "react";
import { userContext } from "../../App";
import AddService from "../AddService/AddService";
import MakeAddmin from "../MakeAddmin/MakeAddmin";
import ManageService from "../ManageService/ManageService";
import OrderList from "../OrderList/OrderList";
import ReviewArea from "../ReviewArea/ReviewArea";
import "./Admin.styles.css";

const Admin = () => {
  const [
    user,
    setUser,
    servicePhoto,
    setServicePhoto,
    paymentError,
    setPaymentError,
    paymentSuccess,
    setPaymentSuccess,
  ] = useContext(userContext);
  const [orderList, setOrderList] = useState(true);
  const [review, setReview] = useState(false);
  const [addService, setAddService] = useState(false);
  const [makeAdmin, setMakeAdmin] = useState(false);
  const [manageService, setManageService] = useState(false);

  const found = servicePhoto.find((Element) => Element.email === user.email);

  const handleOrder = () => {
    setOrderList(true);
    setAddService(false);
    setMakeAdmin(false);
    setManageService(false);
    setReview(false);
  };

  const handleReview = () => {
    setOrderList(false);
    setAddService(false);
    setMakeAdmin(false);
    setManageService(false);
    setReview(true);
  };

  const handleAddService = () => {
    setOrderList(false);
    setAddService(true);
    setMakeAdmin(false);
    setManageService(false);
    setReview(false);
  };

  const handleMakeAdmin = () => {
    setOrderList(false);
    setAddService(false);
    setMakeAdmin(true);
    setManageService(false);
    setReview(false);
  };

  const handleManageService = () => {
    setOrderList(false);
    setAddService(false);
    setMakeAdmin(false);
    setManageService(true);
    setReview(false);
  };
  return (
    <div className="container">
      {/* <SideBar></SideBar> */}
      <div className="row">
        <div className="col-lg-4 col-sm-12 p-0">
          <ul className="side-bar-list">
            {!found ? (
              <>
                <li
                  onClick={handleOrder}
                  style={{ fontSize: "20px", color: "#FF3B3E" }}
                >
                  OrderList
                </li>
                <li
                  onClick={handleReview}
                  style={{ fontSize: "20px", color: "#FF3B3E" }}
                >
                  Review
                </li>
              </>
            ) : (
              <>
                <li
                  onClick={handleOrder}
                  style={{ fontSize: "20px", color: "#FF3B3E" }}
                >
                  OrderList
                </li>
                <li
                  onClick={handleReview}
                  style={{ fontSize: "20px", color: "#FF3B3E" }}
                >
                  Review
                </li>
                <li
                  onClick={handleAddService}
                  style={{ fontSize: "20px", color: "#FF3B3E" }}
                >
                  Add Service
                </li>
                <li
                  onClick={handleMakeAdmin}
                  style={{ fontSize: "20px", color: "#FF3B3E" }}
                >
                  Make Admin
                </li>
                <li
                  onClick={handleManageService}
                  style={{ fontSize: "20px", color: "#FF3B3E" }}
                >
                  Manage Service
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="col-lg-8 col-sm-12 p-0">
          {orderList && <OrderList />}
          {review && <ReviewArea />}
          {addService && <AddService />}
          {makeAdmin && <MakeAddmin />}
          {manageService && <ManageService />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
