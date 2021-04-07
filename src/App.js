import { NotFound } from "./components/not-found";
import { Home } from "./components/home";
import StudentDetails from "./containers/studentDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import promiseMW from "redux-promise";
import { Login } from "./containers/login";
const createStoreWithMW = applyMiddleware(promiseMW)(createStore);

export const App = () => {
  return (
    <div>
      <Provider store={createStoreWithMW(reducers)}>
        <BrowserRouter>
          <div className="conatainer">
            <div className="row">
              <div className="col">
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/home" component={Home} />
                  <Route path="/student/:id" component={StudentDetails} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    </div>
  );
};
