import "./Assets/scss/style.scss";
import { ToastContainer} from "react-toastify";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "Pages/LandingPage";
import PageDetails from "Pages/PageDetails";
import Checkout from "Pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={PageDetails}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
