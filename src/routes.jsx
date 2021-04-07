import React from "react";
import { Route, Switch } from "react-router-dom";
//  COMPONENTS
import MainContent from "./containers/MainContent";
import ProductContainer from "./containers/ProductContainer";
import Settings from "./containers/Settings";
import UserContainer from "./containers/UserContainer";
import Layout from "./Layout/Layout";
import Navbar from "./containers/Navbar";
// import Main from "./containers/Main";

const Routes = (props) => {
  return (
    <>
      <div style={{ overflowX: "hidden" }} className="row">
        <div className="col-md-3 p-0 m-0 d-none d-md-block">
          <Navbar />
        </div>

        <div
          style={{ overflowX: "hidden" }}
          className=" col-md-9 col-12 p-0 m-0"
        >
          <Layout>
            <Switch>
              <Route path="/" exact component={MainContent} />
              <Route path="/users" exact component={UserContainer} />
              <Route path="/product" exact component={ProductContainer} />
              <Route path="/settings" exact component={Settings} />
            </Switch>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default Routes;
