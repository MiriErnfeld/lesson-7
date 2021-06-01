
import './App.css';
import InsertPupil from './components/insertPupilDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PupilDetails from './components/pupilDetail'
import { Provider } from 'react-redux';
import mystore from './redux/store'

import Home from './components/home'
import Login from './components/login'
import Flash from './components/flash'
import About from './components/about'
import Success from './components/success'
import Details from './components/pupilDetail'
import Menue from './components/menue'
import Swapi from './components/swapi';

function App() {
  return (

    <div className="App">
      <Provider store={mystore}  >

        <Swapi></Swapi>

        <Router>
          {/* <Flash>   </Flash> */}
          {/* <Login></Login> */}

          {/* <Menue></Menue> */}

          <Switch>
            {/* <Route path="/About">
              <About></About>
            </Route> */}
            <Route path="/Success">
              <Success />
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            {/* <Route path="/PupilDetails/:id">
              <PupilDetails></PupilDetails>
            </Route> */}
            <Route path="/About">
              <About></About>
            </Route>
            {/* <Route path="/">
              <Home></Home> */}
            {/* </Route> */}

          </Switch>

        </Router>
      </Provider>
    </div>
  );
}
export default App;
