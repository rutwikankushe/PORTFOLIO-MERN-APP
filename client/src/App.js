import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import "./App.css";
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';   
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import PrivateRoute from './private/PrivateRoute';
import RouteLinks from './private/RouteLinks';
import CreateProfile from './components/CreateProfile';
import NotFound from './components/NotFound';
import Store from './store';
import Loader from './components/Loader';
import Edit from './components/EditProfile';
function App() {
	return (
		<Provider store={Store}>
			<Router>
			<Navbar/>
				<Switch>
					<PrivateRoute path='/' exact component={Home} />
					<PrivateRoute path='/about' exact component={About} />
					<PrivateRoute  path='/contact' exact component={Contact} />
					<Route  path='/loader' exact component={Loader} />
					<PrivateRoute  path='/createprofile' exact component={CreateProfile} />
					<RouteLinks  path='/login' exact component={Login} />
					<RouteLinks  path='/register' exact component={Register} />
					<PrivateRoute path='/dashboard' exact component={Dashboard} />
					<PrivateRoute path='/edit/:id' exact component={Edit} />

					<Route  component={NotFound} />
					
					
					
				</Switch>
			</Router>
			</Provider>
		
	);
}

export default App;
