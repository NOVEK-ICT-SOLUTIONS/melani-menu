
import { Routes, Route } from 'react-router-dom';
import Melani from './restaurants/Melani';
import Home from './Home';
import Page from './app/dashboard/Page'
// import Dashboard from './admin/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/melani" element={<Melani />} />
      <Route path="/admin" element={<Page />} />
      {/* Add more restaurants here, e.g. <Route path="/cocoa" element={<Cocoa />} /> */}
      {/* Optionally, add a NotFound page: <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
              