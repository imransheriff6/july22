import './App.css';
import ParentComponent from './components/propsExample/provider';
import ClassExample from './components/classExample/classExample';
import Demo from './components/functionExample/demo';
import Form from './components/functionExample/form';
import Album from './components/cloneExample/cloneFC';
import APICall from './components/ApiExample/getExample';
import Home from './components/routeExample/home';
import AllUser from './components/routeTask/allUser';
import About from './components/routeExample/about';
import store from './redux/store';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './components/routeTask/singleUser';
import Counter from './components/reduxExample/counter';
// import Demo from './components/classExample/demo';
// import Form from './components/classExample/form';
function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
      <button><Link to='/home'>Home</Link></button>
      <button><Link to='/about'>About</Link></button>
        <Switch>
        <Route path='/' exact>
          {/* <APICall /> */}
          <Counter />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/alluser'>
          <AllUser />
        </Route>
        <Route path='/user'>
          <User />
        </Route>
        </Switch> 
      </Router>
    </Provider>
    </>
  )
}

export default App;
