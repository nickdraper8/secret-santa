import Nav from "./components/nav/nav";
import NameList from './components/form/name_list';
import Review from "./components/review/review";
import { Route, HashRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Route path="/" component={NameList} />
        <Route path="/review" component={Review} />
      </HashRouter>
    </div>
  );
}

export default App;
