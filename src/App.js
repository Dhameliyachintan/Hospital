import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Departments from './container/Departments/Departments';
import Doctors from './container/Doctors/Doctors';
import Home from './container/Home';
import Contact from './container/contact/Contact';
import About from './container/About/About';
import Doctor from './container/Doctor';
import Login from './container/Login';
import Medicine from './container/Medicine/Medicine';
import PublicRoute from './container/Route/PublicRoute';
import PrivateRoute from './container/Route/PrivateRoute';
import Bookappoinment from './container/appoinment/Bookappoinment';
import Listappoinment from './container/appoinment/Listappoinment';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Switch>
          <PublicRoute exact path={"/"} component={Home} />
          <PublicRoute exact path={"/Departments"} component={Departments} />
          <PublicRoute exact path={"/Doctors"} component={Doctors} />
          <PrivateRoute exact path={"/bookappointment"} component={Bookappoinment} />
          <PublicRoute exact path={"/listappointment"} component={Listappoinment} />
          <PublicRoute exact path={"/contact"} component={Contact} />
          <PublicRoute restricted={true} exact path={'/Login'} component={Login} />
          <PublicRoute exact path={"/About"} component={About} />
          <PrivateRoute exact path={"/Medicine"} component={Medicine} />
          <PublicRoute exact path={"/Doctor"} component={Doctor} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
