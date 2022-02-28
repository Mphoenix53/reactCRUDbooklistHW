import './App.css';
import {Link, Outlet} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Books List</h1>
      <nav
        style={{
          border:"5px solid blue"
        }}
        >
          <Link to='/users'>Users</Link> | {'  '}
          <Link to='/about'>About</Link>
        </nav>
        <Outlet />
    </div>
  );
}

export default App;