import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Header';
import { Nav } from './Nav';
import { ReviewList } from './ReviewList';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav />
      <Routes>
        <Route path="/" element={<ReviewList />}></Route>
        <Route path="/reviews" element={<ReviewList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
