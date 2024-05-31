import "./App.css";
// import { useEffect } from "react";
// React - Bootstrap & Other packages
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
// Components
import Footer from "./components/Footer";
import Header from "./components/Header";
// screens
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {
  // async function checkLinks(links) {
  //   const invalidLinks = [];

  //   for (let i = 0; i < links.length; i++) {
  //     const link = links[i];

  //     try {
  //       const response = await fetch(link, { method: "HEAD" });
  //       if (response.status === 404 || response.redirected) {
  //         invalidLinks.push(link);
  //       }
  //     } catch (error) {
  //       invalidLinks.push(link);
  //     }
  //   }

  //   return invalidLinks;
  // }

  // useEffect(() => {
  //   const links = document.getElementsByTagName("a");
  //   const linksToCheck = [];
  //   for (let i = 0; i < links.length; i++) {
  //     const linke = links[i].href;
  //     linksToCheck.push(linke);
  //     alert(linke);
  //   }
  //   checkLinks(linksToCheck)
  //     .then((invalidLinks) => {
  //       // console.log("Invalid Links:", invalidLinks);
  //       invalidLinks.forEach((link) => {
  //         console.log("Invalid Link:", link);
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <main className="my-3">
        <Container>
          <Routes>
            <Route exact path="/" Component={HomeScreen} />
            <Route path="/product/:id" Component={ProductDetails} />
            <Route path="/cart/:id?" Component={CartScreen} />
            <Route path="/login" Component={LoginScreen} />
            <Route path="/payment" Component={PaymentScreen} />
            <Route path="/placeorder" Component={PlaceOrderScreen} />
            <Route path="/shipping" Component={ShippingScreen} />
            <Route path="/profile" Component={ProfileScreen} />
            <Route path="/register" Component={RegisterScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
