import './App.css';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div>
      <h1>PHOENIX Books List</h1>
      <nav
        style={{
          
          border:'5px soild blue'
        }}
        >
          <Link to='/users'>Users</Link> | {'  '}
          <Link to='/about'>About</Link>
        </nav>
    </div>
  );
}

export default App;