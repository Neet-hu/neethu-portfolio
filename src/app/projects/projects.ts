import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],

  templateUrl: './projects.html',
  styleUrl: './projects.css',
  template: `
    <section>
      <h1>Projects</h1>
      <div>
        <h3>Project 1</h3>
        <p>Description of Project 1.</p>
      </div>
      <div>
        <h3>Project 2</h3>
        <p>Description of Project 2.</p>
      </div>
    </section>
  `,
})

export class Projects {

}
