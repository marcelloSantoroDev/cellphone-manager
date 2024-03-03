import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import List from './components/List';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import PrivateRoute from './utils/PrivateRoute';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <PrivateRoute path="/add-product" component={Add} />
      <Redirect from="/add-product" to="/" />
      <PrivateRoute path="/edit-product-:id" component={Edit} />
      <Redirect from="/edit-product-:id" to="/" />
      <PrivateRoute path="/products-list" component={List} />
      <Redirect from="/products-list" to="/" />
    </Switch>
  );
}

export default App;