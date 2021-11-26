import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import Services from "./components/servicess/Services";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import SingleService from "./components/servicess/singleService/SingleService";
import Footer from "./components/footer/Footer";
import Error from "./components/error/Error";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/singleservice/:id">
              <SingleService></SingleService>
            </PrivateRoute>
              <PrivateRoute path="/contact">
                 <Contact></Contact>
            </PrivateRoute>
              <PrivateRoute path="/about">
              <About/>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
