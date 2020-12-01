import Nav from "./components/nav/nav";
import NameList from './components/form/name_list';
import Finish from "./components/finish/finish";
import { Route, HashRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Nav />
        
        <Route path="/complete" component={Finish} />
        <Route exact path="/" component={NameList} />
      </HashRouter>
    </div>
  );
}

export default App;
