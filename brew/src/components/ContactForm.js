import React from 'react';
import '../styles/ContactForm.css';
import { ContactFunc } from '../backend.js';

function ContactForm() {
  return (
    <div id="contactDiv">
      <form id="ContactForm" onSubmit={ContactFunc}>
        <br />
        <header>CONTACT FORM</header>
        <input
          id="name"
          type="text"
          placeholder="FULL NAME"
          class="formElements"
          required
        />
        <input
          id="email"
          type="text"
          placeholder="E-MAIL"
          class="formElements"
          required
        />
        <textarea
          id="message"
          type="text"
          placeholder="MESSAGE"
          class="formElements"
          required
        ></textarea>
        <input id="submit" type="submit" value="GO!" class="formElements" />
      </form>
    </div>
  );
}
export default ContactForm;
