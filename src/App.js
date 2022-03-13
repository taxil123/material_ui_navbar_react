import './App.css';
import ResponsiveAppBar from './components/Navbar';
import {Route,Routes} from 'react-router';
import Home from './components/Home';
import Blog from './components/Blog';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/pricing" element={<Pricing/>} />
        </Routes>
    </div>
  );
}

export default App;
