import './App.css';
import Header from './Header';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import IndexPage from './pages/IndexPage';
import Post from './Post';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Routes to Layout, which then Routes to either login page or posting page */}
        <Route index element={<IndexPage />} />
        <Route path={'login'} element={<div>login page</div>} />
      </Route>
    </Routes>
  );
}

export default App;