import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import All from './components/All/All';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path='/:name' component={Detail}>
          </Route>
          <Route path='/' component={All}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
