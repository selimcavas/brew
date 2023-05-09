import React from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  return (
    <div id="contactDiv">
      <form id="ContactForm">
        <br />
        <header>CONTACT FORM</header>
        <input id="name" type="text" placeholder="NAME" class="formElements" />
        <input
          id="email"
          type="text"
          placeholder="E-MAIL"
          class="formElements"
        />
        <textarea
          id="message"
          type="text"
          placeholder="MESSAGE"
          class="formElements"
        ></textarea>
        <input id="submit" type="submit" value="GO!" class="formElements" />
      </form>
    </div>
  );
}
export default ContactForm;
