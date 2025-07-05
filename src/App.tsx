/** @format */

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import Quiz from './pages/Quiz';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="quiz" element={<Quiz />} />

        <Route path="concerts">
          {/* <Route index element={<ConcertsHome />} />
        <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
