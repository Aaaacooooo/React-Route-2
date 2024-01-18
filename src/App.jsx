import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar.jsx';
import Inicio from './pages/Inicio.jsx';
import Contacto from './pages/Contacto.jsx';
import Blog from './pages/Blog.jsx';
import NotFound from './pages/NotFound.jsx';
import Layout from './layouts/Layout.jsx';
import BlogCharacter from './pages/BlogCharacter.jsx';

function App() {
  return (
    <>
      <Navbar />
      <h1>App</h1>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Inicio />} path="/" />
          <Route element={<Contacto />} path="/contacto" />
          <Route element={<Blog />} path="/blog" />
          <Route element={<BlogCharacter />} path="/blog/:id" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </>
  );
}

export default App
