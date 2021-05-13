import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import RoomFeed from "../routeComponents/product/RoomFeed";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RoomFeed} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
