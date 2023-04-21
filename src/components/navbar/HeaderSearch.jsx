import React from 'react'
import { Form, redirect } from 'react-router-dom'
import './style.css'
import { createContact } from '../contact/Contacts'

export async function action () {
  const contact = await createContact()
  return redirect(`/contacts/${contact.id}/edit`)
}
const HeaderSearch = () => {
  return (
    <div className='header-search'>
      <form id='search-form' role='search'>
        <input id='q' aria-label='Search contacts' placeholder='Search' type='search' name='q' />
        <div className='sr-only' aria-live='polite' />
      </form>
      <Form method='post'>
        <button type='submit'>New</button>
      </Form>
    </div>
  )
}

export default HeaderSearch
