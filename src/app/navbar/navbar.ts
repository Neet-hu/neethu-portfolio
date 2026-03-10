import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',

  template: `
    <mat-toolbar color="primary">
      <span>My Portfolio</span>
      <span style="flex: 1 1 auto;"></span>
      <button mat-button routerLink="/">Home</button>
      <button mat-button routerLink="/about">About</button>
      <button mat-button routerLink="/skills">Skills</button>
      <button mat-button routerLink="/projects">Projects</button>
      <button mat-button routerLink="/techskills">Technical Skill<\button>
      <button mat-button routerLink="/contact">Contact</button>
    </mat-toolbar>
  `,
})

export class Navbar {

}
