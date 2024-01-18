import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar.jsx';
import Inicio from './pages/Inicio.jsx';
import Contacto from './pages/Contacto.jsx';
import Blog from './pages/Blog.jsx';
import NotFound from './pages/NotFound.jsx';
import Layout from './layouts/Layout.jsx';

function App() {
  return (
    <>
      <Navbar />
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
