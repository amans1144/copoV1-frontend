import University from './Component/Dashboard/University/University';
import AddUser from './Component/Dashboard/University/AddUser';

import EditUniversity from './Component/Dashboard/University/EditUniversity';
import NavBar from './Component/Nav';
import NotFound from './Component/Dashboard/University/NotFound'; 
import Home from './Component/Dashboard/Home';
import AddTeacher from './Component/Dashboard/Director/AddTeacher';
import Teacher from './Component/Dashboard/Director/Teacher';
import EditTeacher from './Component/Dashboard/Director/EditTeacher';
import Login from './Component/Login/Login'
import Cal from './Component/Dashboard/Calculation/Calculation';
import AddCal from './Component/Dashboard/Calculation/AddCal';





import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Login from './Component/Login/Login';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/login" component={Login} />

      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/department" component={University} />
        <Route exact path="/cal" component={Cal} />
        <Route exact path="/add/cal" component={AddCal} />

        <Route exact path="/add/department" component={AddUser} />
        <Route exact path="/edit/department/:id" component={EditUniversity} />
        {/* teacher */}
        <Route  path="/teacher" component={Teacher} />
        <Route exact path="/add/teacher" component={AddTeacher} />
        <Route exact path="/edit/teacher/:id" component={EditTeacher} />
        <Route component={NotFound} />
         
      </Switch>
    </BrowserRouter>
  );
}

export default App;
