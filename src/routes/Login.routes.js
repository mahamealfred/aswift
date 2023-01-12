import React ,{lazy} from "react";
import { useRouteMatch, Route,Switch } from "react-router-dom";
import Login from "../views/Login";
import LoginPrivateRoute from "./LoginPrivateRoutes"
import LandingPage from "../pages/landingpage/HomePage";
const Banner=lazy(()=>import("../components/banner"))

function App() {
  const {path}=useRouteMatch();
    return (
    
      <Switch >
      <Login>
          <Route
            component={({ match }) => (
              <>
                <LoginPrivateRoute exact path={path} component={LandingPage} />
              </>
            )}
          />
        </Login>
      </Switch>
       
     
    );
  }
  
  export default App;