import './App.css';
import Home from './Views/Home'
import FAQ from './Views/FAQ'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/faq" exact component={FAQ} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
