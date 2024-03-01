import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import List from './components/List';
import Add from './components/Add';
import Edit from './components/Edit';
import Remove from './components/Remove';


function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/products-list" component={List} />
      <Route path="/add-product" component={Add} />
      <Route path="/edit-product" component={Edit} />
      <Route path="/remove-product" component={Remove} />
    </Switch>
  );
}

export default App;
