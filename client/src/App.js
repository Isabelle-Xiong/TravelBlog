import './App.css';
import Header from './Header';
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout"
import IndexPage from './pages/IndexPage';
import Post from './Post';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Routes to Layout, which then Routes to either login page or posting page */}
        <Route index element={<IndexPage />} />
        {/* when the URL matches /login, the LoginPage component should be rendered. */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;