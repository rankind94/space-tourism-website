import './App.css';
import {
  BrowerRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            {/* <Route path="/" element={}></Route>
            <Route path="/destination" element={}></Route>
            <Route path="/crew" element={}></Route>
            <Route path="/technology" element={}></Route> */}
        </Routes>
      </Router>
        Main page (React Router)
    </div>
  );
}

export default App;
