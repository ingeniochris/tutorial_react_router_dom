import { useRouteError } from 'react-router-dom'
import './style.css'

export default function ErroPage () {
  const error = useRouteError()
  console.log(error)
  return (
    <div id='error-page'>
      <h1>Oopss !</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
