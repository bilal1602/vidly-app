import "./App.css";
import auth from './services/authService';
import Logout from "./components/logout";
import NavBar from "./components/navBar";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import 'react-toastify/dist/ReactToastify.css'
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import { ToastContainer } from 'react-toastify';
import React, { useState, useEffect } from "react";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/common/loginForm";
import { Route, Redirect, Switch } from "react-router-dom";
import ProtectedRoute from './components/common/protectedRoute';


function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(auth.getCurrentUser());
  }, [])
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar user={user} />
      <main className="container">
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/customers" component={Customers} />
          <ProtectedRoute path="/movies/:id" component={MovieForm} />
          <Route path="/movies" render={props => <Movies  {...props} user={user} />} />
          <Route path="/logout" component={Logout} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
