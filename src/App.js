import './Assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'Pages/LandingPage';
import PageDetails from 'Pages/PageDetails';
import TestingComponent from 'Pages/TestingComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={PageDetails}></Route>
        <Route exact path='/testingcomponent' component={TestingComponent}></Route>
      </Router>
    </div>
  );
}

export default App;
