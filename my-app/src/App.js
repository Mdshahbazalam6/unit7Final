import Signup from "./components/Signup";
import { Routes,Route } from 'react-router-dom'
import Login from "./components/Login";
import Post from "./components/Post";

function App() {
  return (
    <div >
      <Routes>
      <Route path='/Post' element={<Post/>}></Route>
  <Route path='/Signup' element={<Signup/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
