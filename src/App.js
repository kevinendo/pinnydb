import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PinsList from "./components/pins-list";
import PinsListSubset from "./components/pins-list-subset";
import PinDetail from "./components/pin-detail";
import GlobalNav from "./components/global-nav";



function App() {

  return (
    <div>
<GlobalNav/>

      <div>
        <Switch>
          <Route exact path={["/"]} component={PinsList} />
          <Route 
            path="/pinDetail/:pin_id"
            render={(props) => (
              <PinDetail {...props} />
            )}
          />
          <Route 
            path="/category/:query"
            render={(props) => (
              <PinsListSubset {...props} />
            )}
          />          
        </Switch>
      </div>
    </div>
  );
}

export default App;