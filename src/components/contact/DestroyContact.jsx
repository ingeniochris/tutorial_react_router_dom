import { redirect } from 'react-router-dom'
import { deleteContact } from './Contacts'

export async function action ({ params }) {
  throw new Error('oh dang!')
  await deleteContact(params.contactId)
  return redirect('/')
}
const DestroyContact = () => {
  return (
    <div>deleteContact</div>
  )
}

export default DestroyContact
