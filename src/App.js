import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './components/home/HomeScreen';
import NavigationBar from './components/shared/NavigationBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
