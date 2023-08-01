import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/review">
                <Review />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
