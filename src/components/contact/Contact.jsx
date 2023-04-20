import { Form } from 'react-router-dom'
import './style.css'

export default function Contact () {
  const contact = {
    first: 'your',
    last: 'Name',
    avatar: 'https://placekitten.com/g/200/200',
    twitter: 'your_twitter',
    notes: 'some notes',
    favorite: true
  }

  const handleSubmit = (event) => {
    if (
      !confirm(
        'Please confirm you want to delete this record.'
      )
    ) {
      event.preventDefault()
    }
  }

  return (
    <div id='contact'>
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
          alt={contact.first + contact.last}
        />
      </div>
      <div>
        <h1>
          {contact.first || contact.last
            ? (
              <>
                {contact.first}{contact.last}
              </>
              )
            : (
              <i>No Name</i>
              )}{' '}
          <Favorite contact={contact} />
        </h1>
        {contact.twitter && (
          <p>
            <a
              target='_blank'
              rel='noreferrer'
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}
        {contact.notes && <p>{contact.notes}</p>}
        <div>

          <Form action='edit'>
            <button tyoe='submit'>Edit</button>
          </Form>

          <Form
            method='post'
            action='destroy'
            onSubmit={() => handleSubmit()}
          >
            <button type='submit'>Delete</button>
          </Form>

        </div>
      </div>
    </div>
  )
}

function Favorite ({ contact }) {
  const favorite = contact.favorite
  return (
    <Form method='post'>
      <button
        name='favorite'
        value={favorite ? 'false' : 'true'}
        aria-label={
          favorite
            ? 'Remove from favorites'
            : 'Add to favorites'
        }
      >
        {favorite ? '★' : '☆'}
      </button>
    </Form>
  )
}
