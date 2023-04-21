import Navbar from './components/navbar/Navbar'
import HeaderSearch from './components/navbar/HeaderSearch'
import './appStyle.css'
import { Outlet, useNavigation } from 'react-router-dom'

export default function App () {
  const navigation = useNavigation()
  return (
    <section>
      <div className='container-sideBar'>
        <HeaderSearch />
        <Navbar />
      </div>
      <div
        id='detail'
        className={
          navigation.state === 'loading' ? 'loading' : ''
        }
      >
        <Outlet />
      </div>
    </section>
  )
}
