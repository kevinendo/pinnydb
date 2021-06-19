import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PinsList from "./components/pins-list";
import PinsListSubset from "./components/pins-list-subset";
import PinDetail from "./components/pin-detail";
import GlobalNav from "./components/global-nav";
import About from "./components/about";
import ArticleList from "./components/article-list";
import Article from "./components/article";

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

function App() {

  return (
    <div>
<GlobalNav/>

      <div>
        <Switch>
          <Route exact path={["/"]} component={PinsList} />
          <Route exact path={["/articles"]} component={ArticleList} />
          <Route 
            path="/article/:article_id"
            render={(props) => (
              <Article {...props} />
            )}
          />

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
          <Route component={NoMatchPage} />      
        </Switch>
      </div>
      <About/>
    </div>
  );
}

export default App;