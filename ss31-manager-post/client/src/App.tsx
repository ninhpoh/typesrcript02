import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/Header";
import Body from "./component/Body";
import "./App.css"
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Body />
      </div>
    </Router>
  );
}

export default App;