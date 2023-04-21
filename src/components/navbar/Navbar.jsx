import { Link, useLoaderData, NavLink } from 'react-router-dom'
import './style.css'
import { getContacts } from '../contact/Contacts'

export async function loader () {
  const contacts = await getContacts()
  return { contacts }
}

const Navbar = _ => {
  const { contacts } = useLoaderData()
  return (
    <nav>
      {
        contacts.length
          ? (
            <ul>
              {contacts.map(contact => (
                <li
                  key={contact.id}
                >
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? 'active'
                        : isPending
                          ? 'pending'
                          : ''}
                  >
                    <Link
                      to={`contacts/${contact.id}`}
                    >
                      {
                      contact.first || contact.last
                        ? (
                          <>
                            {contact.first} {contact.last}
                          </>
                          )
                        : (
                          <i>No Name</i>
                          )
                    }{' '}
                      {contact.favorite && <span>★</span>}
                    </Link>
                  </NavLink>
                </li>
              ))}
            </ul>
            )
          : (
            <p>
              <i>No contacts</i>
            </p>
            )
      }
    </nav>
  )
}

export default Navbar
