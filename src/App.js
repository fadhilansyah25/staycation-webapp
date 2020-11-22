import './Assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'Pages/LandingPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
