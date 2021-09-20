import { Home, Cart } from "../screens/";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "../components";

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route path='/cart'><Cart /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;