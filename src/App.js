import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './Header';
import { Nav } from './Nav';
import { ReviewList } from './ReviewList';
import { SingleReview } from './SingleReview';
import { Error } from './Error';
import { Users } from './Users';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav />
      <Routes>
        <Route path="/" element={<ReviewList />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/reviews" element={<ReviewList />}></Route>
        <Route path="/reviews/:review_id" element={<SingleReview />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
