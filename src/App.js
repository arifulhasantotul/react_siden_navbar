import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Supports from "./pages/Supports";
import Team from "./pages/Team";

function App() {
   return (
      <Router>
         <Sidebar></Sidebar>
         <Switch>
            <Route exact path="/">
               <Home></Home>
            </Route>
            <Route path="/home">
               <Home></Home>
            </Route>
            <Route path="/products">
               <Products></Products>
            </Route>
            <Route path="/reports">
               <Reports></Reports>
            </Route>
            <Route path="/team">
               <Team></Team>
            </Route>
            <Route path="/messages">
               <Messages></Messages>
            </Route>
            <Route path="/supports">
               <Supports></Supports>
            </Route>
            <Route path="*">
               <NotFound></NotFound>
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
