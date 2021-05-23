import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PinsList from "./components/pins-list";
import PinsListSubset from "./components/pins-list-subset";
import PinDetail from "./components/pin-detail";
import GlobalNav from "./components/global-nav";
import About from "./components/about";


function App() {

  return (
    <div>
<GlobalNav/>

      <div>
        <Switch>
          <Route exact path={["/"]} component={PinsList} />
          <Route exact path={["/about"]} component={About} />
          <Route 
            path="/pinDetail/:pin_id"
            render={(props) => (
              <PinDetail {...props} />
            )}
          />
          <Route 
            path="/:by/:query"
            render={(props) => (
              <PinsListSubset {...props} />
            )}
          />          
        </Switch>
      </div>
      <About/>
    </div>
  );
}

export default App;