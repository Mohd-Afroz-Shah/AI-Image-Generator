import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {logo} from './assets';
// import Home from './pages/Home';
// import CreatePost from './pages/CreatePost';
import { Home, CreatePost } from './pages';
import { Cards, FormField, Loader } from './components';
const App = () => {
  return (
    <>
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-4 px-2 py-2 border-b border-b-blue-100'>
      <Link to='/'>
      <img src={logo} alt='logo' className='w-28 object-contain'/>
      </Link>
      <Link to='/create-post' className='bg-slate-300 font-inter font-medium items-center rounded-md px-2 py-2'>Create</Link>
      </header>
      <main className='w-full min-h-[calc(100vh-73px)] sm:8px px-2 py-2'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/create-post" element={<CreatePost/>}/>
      </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}

export default App