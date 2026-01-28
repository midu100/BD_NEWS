import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
import NewsDetails from './pages/NewsDetails'

function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
        <Route index element={<Home/>} />
        <Route path='news/:id' element={<NewsDetails/>} />
      </Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={myRoute} />
     
    </>
  )
}

export default App
