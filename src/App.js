
import { Route,Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Departments from './container/Departments/Departments';
import Doctors from './container/Doctors/Doctors';
import appointment from './container/appointment/appointment';
import Home from './container/Home';
import contact from './container/contact/contact';
import About from './container/About/About';
import Auth from './container/Auth';

function App() {
  return (
    <div>
      <Header />
      <Switch> 
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/Departments"} component={Departments} />
        <Route exact path={"/Doctors"} component={Doctors} />
        <Route exact path={"/appointment"} component={appointment} />
        <Route exact path={"/contact"} component={contact} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/Auth"} component={Auth} />
       </Switch>
      <Footer />
    </div>
  );
}

export default App;
