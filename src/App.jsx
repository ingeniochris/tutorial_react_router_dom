import Navbar from './components/navbar/Navbar'
import HeaderSearch from './components/navbar/HeaderSearch'
import './appStyle.css'
import { Outlet } from 'react-router-dom'

export default function App () {
  return (
    <section>
      <div className='container-sideBar'>
        <HeaderSearch />
        <Navbar />
      </div>
      <div id='detail'> <Outlet /> </div>
    </section>
  )
}
