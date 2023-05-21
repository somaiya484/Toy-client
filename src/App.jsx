import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import BannerSec from './allPages/Home/BannerSec/BannerSec';
import Login from './allPages/Login/Login';
import Signup from './allPages/SignUp/Signup';
import AllToys from './allPages/AllToys/AllToys';
import AddToys from './allPages/AddToys/AddToys';
import Blog from './allPages/Blog/Blog';

function App() {
  const [count, setCount] = useState(0);

  const titles = {
    '/': 'Home',
    '/login': 'Login',
    '/signUp': 'SignUp',
    '/allToys': 'AllToys',
    '/about': 'About',
    '/addToys': 'AddToys',
    '/myToys': 'MyToys',
    '/blog': 'Blog',

  }

  const location = useLocation()
  useEffect(
    () => (document.title = titles[location.pathname] ?? '|'),
    [location],
  )

  return (

    <>
      <Routes>
        <Route path="/" element={<BannerSec></BannerSec>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<Signup></Signup>} />
        <Route path="/allToys" element={<AllToys></AllToys>} />
        <Route path="/signUp" element={<Signup></Signup>} />
        <Route path="/addToys" element={<AddToys></AddToys>} />
        <Route path="/myToys" element={<AddToys></AddToys>} />
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
