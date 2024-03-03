import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import List from './components/List';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';


function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/products-list" component={List} />
      <Route path="/add-product" component={Add} />
      <Route path="/edit-product-:id" component={Edit} />
    </Switch>
  );
}

export default App;
