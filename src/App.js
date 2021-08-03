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
          <Route path="/websearch">
            <SearchPage />
          </Route>
          <Route path='/trueterms' component={() => { 
            window.location.href = 'http://localhost:3945/api/get/searchterms';
            // window.location.href = 'https://mindfind.net/proxy/api/get/searchterms'; 
            return null;
          }}/>
          <Route path='/intentsuggestions' component={() => { 
            window.location.href = 'http://localhost:3945/api/get/intentsuggestions';
            // window.location.href = 'https://mindfind.net/proxy/api/get/intentsuggestions'; 
            return null;
          }}/>
          <Route path='/pseudoterms' component={() => {
            window.location.href = 'http://localhost:3945/api/get/searchterms?pseudo=true';
            // window.location.href = 'https://mindfind.net/proxy/api/get/searchterms?pseudo=true'; 
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
