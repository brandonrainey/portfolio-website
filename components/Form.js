import React from 'react'

export default function Form() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="contactForm mt-6"
      action="/"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="formLabel">
        <label htmlFor="name">Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          required
          className={`rounded text-black p-1 w-56`}
        />
      </p>
      <p className="formLabel mt-2">
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          id="email"
          name="email"
          required
          className={`rounded text-black p-1 w-56`}
        />
      </p>
      <p className="formLabel mt-2">
        <label htmlFor="message">Message</label> <br />
        <textarea
          id="message"
          name="message"
          required
          className={`rounded text-black p-1 w-72  `}
        ></textarea>
      </p>
      <button className="submitButton mt-2" type="button">
        <input
          type="submit"
          value="Submit"
          className={`p-1 rounded font-bold cursor-pointer darkButton`}
        />
      </button>
    </form>
  )
}
