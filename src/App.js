
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import MapView from "./components/MapView"
import NotFound from "./components/NotFound"
import Register from "./components/Register"
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register}/>
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute exact path="/map" component={MapView} />
      <Route exact path="/not-found" component={NotFound} />
  <Redirect to="not-found" />
    </Switch>
  );
};

export default App;



//
// <Route path="*" element={<h2>404 - Page Not Found</h2>} />