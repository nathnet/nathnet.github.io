import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/common/NavigationBar';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
