import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Customer/Components/Cart/Cart";
import Checkout from "./Customer/Components/Checkout/Checkout";
import Footer from "./Customer/Components/Footer/Footer";
import Navigation from "./Customer/Components/Navigation/Navigation";
import Order from "./Customer/Components/Order/Order";
import Orderdetails from "./Customer/Components/Order/Orderdetails";
import Product from "./Customer/Components/Product/Product";
import Productdetails from "./Customer/Components/ProductDetails/ProductDetails";
import Homepage from "./Customer/Pages/Homepage/Homepage";
import CustomerRoutes from "./Routers/CustomerRoutes";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
