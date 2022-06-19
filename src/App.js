import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Admin from "./components/Admin/Admin";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Order from "./components/Order/Order";
import OrderList from "./components/OrderList/OrderList";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Projects from "./components/Projects/Projects";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
  });
  const [servicePhoto, setServicePhoto] = useState([]);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  return (
    <userContext.Provider
      value={[
        user,
        setUser,
        servicePhoto,
        setServicePhoto,
        paymentError,
        setPaymentError,
        paymentSuccess,
        setPaymentSuccess,
      ]}
    >
      <Router>
        <div className="header-wrapper">
          <Header></Header>
        </div>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/review">
            <About></About>
          </Route>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/services">
            <Projects></Projects>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute path="/order/:idNumber">
            <Order></Order>
          </PrivateRoute>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
