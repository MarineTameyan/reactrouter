
import React from "react";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Contact from "./pages/contact";
import Header from "./components/header";
import {Switch, Route} from "react-router-dom";
import {routerNames} from "./router/router";



class App extends React.Component {

    render() {
        return (
            <>
                <Header/>
              <div className={'asdasdasd'}>
                  <Switch>
                      <Route path={routerNames.HOME} exact>
                          <Home/>
                      </Route>
                      <Route exact path={routerNames.ABOUT_US}>
                          <AboutUs/>
                      </Route>
                      <Route exact path={routerNames.CONTACT}>
                          <Contact/>
                      </Route>
                  </Switch>
              </div>
            </>
        )
    }
}

export default App;



