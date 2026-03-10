import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  
  template: `
    <section>
      <h1>Contact Me</h1>
      <form>
        <label for="name">Name:</label>
        <input id="name" type="text" />
        <label for="email">Email:</label>
        <input id="email" type="email" />
        <label for="message">Message:</label>
        <textarea id="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  `,
})
export class Contact {

}


