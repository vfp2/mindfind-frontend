import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path='/trulylucky' component={() => { 
            window.location.href = 'http://localhost:3944/api/get/searchterms'; 
            return null;
          }}/>
          <Route path='/pseudolucky' component={() => { 
            window.location.href = 'https://mindfind.net/proxy/api/get/searchterms?pseudo=true'; 
            return null;
          }}/>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        {/*search (result page) */}
      </Router>
    </div>
  );
}

export default App;
